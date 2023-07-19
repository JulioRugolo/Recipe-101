import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function DoneRecipesButton() {
  const { setRecipeDone } = useContext(AppContext);
  return (
    <div>
      <button
        data-testid="filter-by-meal-btn"
        onClick={ () => setRecipeDone('Meals') }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ () => setRecipeDone('Drinks') }
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-all-btn"
        onClick={ () => setRecipeDone('All') }
      >
        All
      </button>
    </div>
  );
}

export default DoneRecipesButton;
