import React from 'react';
import '../css/RecipeList.css';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div className="recipe-item" key={recipe.recipe.label}>
          <h2 className="recipe-title">{recipe.recipe.label}</h2>
          <img className="recipe-image" src={recipe.recipe.image} alt={recipe.recipe.label} />
          <ul className="recipe-details">
            <li>
              <strong>Ingredients:</strong> {recipe.recipe.ingredientLines.join(', ')}
            </li>
            <li>
              <strong>Calories:</strong> {recipe.recipe.calories}
            </li>
            <li>
              <strong>Yield:</strong> {recipe.recipe.yield}
            </li>
            <li>
              <strong>Cooking Time:</strong> {recipe.recipe.totalTime}
            </li>
            <li>
              <strong>Source:</strong> <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">Recipe Link</a>
            </li>
            {/* Add more properties as needed */}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
