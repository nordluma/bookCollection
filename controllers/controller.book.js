const mongoose = require("mongoose");

const Book = require("../models/models.book");

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getAllBooks = async () => {};

// @desc    Get book by id
// @route   GET /api/books/:id
// @access  Public
const getBookById = async () => {};

// @desc    Add new book
// @route   POST /api/books
// @access  Public
const addBook = async () => {};

// @desc    Update book info
// @route   PATCH /api/books/:id
// @access  Public
const updateBook = async () => {};

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Public
const deleteBook = async () => {};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
};
