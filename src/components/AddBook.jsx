import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-book-container">
      <h2 className="form-title">📖 Add a New Book</h2>
      <form className="add-book-form">
        <input type="text" name="title" placeholder="Book Title" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Book Description" onChange={handleChange} required></textarea>
        <input type="url" name="coverImage" placeholder="Cover Image URL" onChange={handleChange} required />
        <button type="submit" className="submit-btn">📚 Add Book</button>
      </form>
      <button className="back-btn" onClick={() => navigate("/")}>⬅ Back to Library</button>
    </div>
  );
};

export default AddBook;
