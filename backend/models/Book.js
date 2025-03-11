import mongoose from "mongoose";

// Check if the model already exists to avoid overwriting
const Book = mongoose.models.Book || mongoose.model("Book", new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: [String], default: [] }
}));

export default Book;


// import mongoose from 'mongoose';

// const bookSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     genre: { type: String, required: true },
//     rating: { type: Number, default: 0 }
// });

// export default mongoose.model('Book', bookSchema);