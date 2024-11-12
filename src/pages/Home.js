// src/utils/api.js
// src/pages/Home.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { fetchBooks } from '../api';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const data = await fetchBooks(query);
    setLoading(false);
    if (data && data.docs) {
      setBooks(data.docs);
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="home-page">
      <h1>Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
};

export default Home;
