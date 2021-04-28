const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

// Error handling
router.use((req, res, next) => {
    const error = new Error("Only GET, POST, PATCH, DELETE methods supported");
    error.status = 500;
    next(error);
});

module.exports = router;
