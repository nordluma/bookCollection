const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config({ path: "./config/.env" });

const connectDb = require("./config/db");
const bookRoutes = require("./routes/routes.book");

connectDb();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routes
app.use("/api/books", bookRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port: ${port}`
    );
});
