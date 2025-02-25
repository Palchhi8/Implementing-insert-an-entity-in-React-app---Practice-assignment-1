import React from "react";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} className="book-cover" />
      <h2 className="book-title">{book.title}</h2>
      <h3 className="book-author">by {book.author}</h3>
      <p className="book-description">{book.description}</p>
    </div>
  );
};

export default BookCard;
