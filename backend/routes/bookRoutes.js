import express from "express";
import { check } from "express-validator";
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

// ✅ Validation rules for adding/updating a book
const bookValidation = [
  check("title").notEmpty().withMessage("Title is required"),
  check("author").notEmpty().withMessage("Author is required"),
  check("genre").notEmpty().withMessage("Genre is required"),
  check("rating").isNumeric().withMessage("Rating must be a number"),
];

// ✅ Routes
router.get("/", getBooks);
router.post("/", bookValidation, addBook); // Validation added
router.put("/:id", bookValidation, updateBook); // Validation added
router.delete("/:id", deleteBook);

export default router;
