import Book from "../models/Book.js";

export const getRecommendations = async (req, res) => {
  try {
    const { genre, author, title, rating } = req.body;

    const filters = {};
    if (genre) filters.genre = genre;
    if (author) filters.author = new RegExp("^" + author + "$", "i"); // Case insensitive search
    if (title) filters.title = new RegExp("^" + title + "$", "i"); // Case insensitive search
    if (rating) filters.rating = { $gte: rating };

    console.log("Filters Applied:", filters); // Debugging

    const books = await Book.find(filters);

    if (books.length === 0) {
      return res.json({ message: "No books found. Try a different search." });
    }

    res.json(books);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};
