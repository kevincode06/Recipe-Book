import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/RecipeStyles.css';



const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Pap & Wors</div>;
  }

  return (
    <div className="recipe-detail">
      <h1 className='detail-tittle'>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetail;
