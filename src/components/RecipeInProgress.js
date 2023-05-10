import React from 'react';
import { useLocation } from 'react-router-dom';
import RecipeInProgressDrinks from './RecipeInProgressDrinks';
import RecipeInProgressMeals from './RecipeInProgressMeals';

function RecipeInProgress() {
  const location = useLocation();
  const mealsPage = location.pathname.split('/')[1];
  return (
    <div>
      {
        mealsPage === 'drinks' ? <RecipeInProgressDrinks />
          : <RecipeInProgressMeals />
      }
    </div>
  );
}

export default RecipeInProgress;
