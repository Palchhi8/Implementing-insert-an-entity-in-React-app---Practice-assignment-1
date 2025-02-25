import React from "react";
import booksData from "./booksData";
import BookCard from "./components/BookCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">📚 Book Library</h1>
      <div className="book-list">
        {booksData.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
