import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import avocadoToast from './images/avocado-toast.jpeg'; 
import pancakes from './images/pancakes.jpeg';          
import grilledCheese from './images/grilled-cheese.jpeg'; 
import './App.css'; // Import your CSS file

const App = () => {
  const [recipes] = useState([
    {
      id: 1,
      title: 'Avocado Toast',
      description: 'A quick, healthy snack.',
      ingredients: ['Avocado', 'Bread', 'Salt', 'Pepper', 'Lemon Juice'],
      steps: ['Toast the bread.', 'Mash avocado and spread on toast.', 'Season with salt, pepper, and lemon juice.'],
      image: avocadoToast,
    },
    {
      id: 2,
      title: 'Pancakes',
      description: 'Fluffy breakfast pancakes.',
      ingredients: ['Flour', 'Eggs', 'Milk', 'Butter', 'Syrup'],
      steps: ['Mix all ingredients.', 'Pour onto a hot griddle.', 'Flip when bubbles appear.', 'Serve with syrup.'],
      image: pancakes,
    },
    {
      id: 3,
      title: 'Grilled Cheese Sandwich',
      description: 'A simple, cheesy delight.',
      ingredients: ['Bread', 'Cheese', 'Butter'],
      steps: ['Butter the bread.', 'Place cheese between slices.', 'Grill in a pan until golden brown.'],
      image: grilledCheese,
    }
  ]);

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
