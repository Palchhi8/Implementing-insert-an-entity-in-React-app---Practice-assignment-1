import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import booksData from "./booksData";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">📚 My Book Library</h1>
      <button className="add-book-btn" onClick={() => navigate("/add-book")}>
        ➕ Add Book
      </button>
      <div className="book-list">
        {booksData.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
