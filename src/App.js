import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const API_KEY = '6dfe6edae69414ccf6181f92e14e8f35'; // Replace with your API key
const API_ID = '495e7765'; // Replace with your API ID

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {console.log("data", data)
        setRecipes(data.hits)
      })
        .catch(error => console.error(error));
    }
  }, [query]);

  return (
    <div className='App'>
      <h1>Recipe Search App</h1>
      <SearchBar onSearch={(query) => setQuery(query)} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
