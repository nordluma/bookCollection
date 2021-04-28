const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
});

module.exports = mongoose.model("Book", bookSchema);
