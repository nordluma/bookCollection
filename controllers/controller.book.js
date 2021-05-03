const mongoose = require("mongoose");

const Book = require("../models/models.book");

// @desc    Get all books
// @route   GET /api/books
// @access  Public
exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            count: books.length,
            data: books,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Get book by id
// @route   GET /api/books/:id
// @access  Public
exports.getBookById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json({
            success: true,
            data: book,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Add new book
// @route   POST /api/books
// @access  Public
exports.addBook = async (req, res, next) => {
    try {
        const { title, author, description } = req.body;

        const book = new Book({
            _id: new mongoose.Types.ObjectId(),
            title,
            author,
            description,
        });

        const savedBook = await book.save();
        return res.status(201).json({ success: true, data: savedBook });
    } catch (err) {
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(
                (val) => val.message
            );

            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
};

// @desc    Update book info
// @route   PATCH /api/books/:id
// @access  Public
exports.updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.updateOne(
            { _id: id },
            { $set: req.body },
            (err, res) => {
                if (err) throw err;
            }
        );
        return res.status(200).json({ success: true, data: book });
    } catch (err) {
        const error = new Error(err);
        error.status = err.status || 500;
        next(error);
    }
};

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Public
exports.deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.deleteOne({ _id: id });

        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

/* module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
}; */
