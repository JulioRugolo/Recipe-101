import React from 'react';
import { useLocation } from 'react-router-dom';
import './Startrecipe.css';
import DrinkDetails from './DrinkDetails';
import MealDetails from './MealDetails';

function RecipeDetails() {
  const location = useLocation();
  const mealsPage = location.pathname.split('/')[1];

  return (
    <div className="recipeDetails">
      {mealsPage === 'meals' ? <MealDetails /> : <DrinkDetails /> }
    </div>
  );
}

export default RecipeDetails;
