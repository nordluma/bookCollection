const mongoose = require("mongoose");

const Book = require("../models/models.book");

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getAllBooks = async () => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        const error = new Error(err);
        error.status = err.status || 500;
        next(error);
    }
};

// @desc    Get book by id
// @route   GET /api/books/:id
// @access  Public
const getBookById = async () => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (err) {
        const error = new Error(err);
        error.status = err.status || 500;
        next(err);
    }
};

// @desc    Add new book
// @route   POST /api/books
// @access  Public
const addBook = async () => {
    try {
        const { title, author, description } = req.body;
        const book = new Book({
            _id: new mongoose.Types.ObjectId(),
            author,
            description,
        });

        const savedBook = await book.save();
        return res.status(201).json({ message: "Book added", savedBook });
    } catch (err) {
        const error = new Error(err);
        error.status = err.status || 500;
        next(error);
    }
};

// @desc    Update book info
// @route   PATCH /api/books/:id
// @access  Public
const updateBook = async () => {
    try {
        const { id } = req.params;
        const book = await Book.updateOne(
            { _id: id },
            { $set: req.body },
            (err, res) => {
                if (err) throw err;
            }
        );
        return res.status(200).json({ message: "Book updated", book });
    } catch (err) {
        const error = new Error(err);
        error.status = err.status || 500;
        next(error);
    }
};

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Public
const deleteBook = async () => {
    try {
        const { id } = req.params;
        const book = await Book.remove({ _id: id });
        return res.status(200).json({ message: "Book deleted" });
    } catch (err) {
        const error = new Error(err);
        error.status = err.status || 500;
        next(error);
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
};
