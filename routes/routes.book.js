const router = require("express").Router();

const {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
} = require("../controllers/controller.book");

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
