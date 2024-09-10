import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeStyles.css';



const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <h1>Recipe Book</h1> 
      <div className="recipe-cards">  
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

