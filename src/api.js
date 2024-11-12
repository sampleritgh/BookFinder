// src/api.js
import axios from 'axios';

const BASE_URL = 'https://openlibrary.org/search.json';

// Function to fetch books based on query
export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?title=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return null;
  }
};
