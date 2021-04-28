const express = require("express");
const bp = require("body-parser");
require("dotenv").config({ path: "./config/.env" });

const connectDb = require("./config/db");
const bookRoutes = require("./routes/routes.book");

connectDb();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/books");

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
    console.log(`Server running on port: ${port}`);
});
