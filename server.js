const express = require("express");
const path = require("path");
require("dotenv").config({ path: "./config/.env" });

const connectDb = require("./config/db");
const bookRoutes = require("./routes/routes.book");

connectDb();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Error Handling
app.use((req, res, next) => {
    const error = new Error("Requested resource not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500).json({
        status: error.status,
        error: error.message,
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port: ${port}`
    );
});
