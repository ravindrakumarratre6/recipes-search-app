import React, { useState } from 'react';
import '../css/SearchBar.css'; // Import your CSS file

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  }

  return (
    <div className='search-input-container'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search For Recipes..................."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
