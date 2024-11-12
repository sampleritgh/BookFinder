// components/HourlyForecast.js
// src/components/BookList.js
import React from 'react';
import "../index.css"

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <p>No books found. Try a different search.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.key} className="book-item">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
          />
          <h3>{book.title_sort}</h3>
          <p>Author: {book.author_name?.[0]}</p>
          <p>First Published: {book.first_publish_year}</p>
          <p>Author_key: {book.author_key}</p>
          <p>version: {book._version_}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
