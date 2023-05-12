import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import DoneRecipeMeals from '../components/DoneRecipeMeals';
import DoneRecipeDrinks from '../components/DoneRecipeDrinks';

function DoneRecipePage() {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  const DONE_RECIPES = 'doneRecipes';
  const data = JSON.parse(localStorage.getItem(DONE_RECIPES));
  const [dataFiltered, setDataFiltered] = useState(data);
  useEffect(() => {
    setTitle('Done Recipes');
    setFavoriteOrProfile(true);
  });
  const handleClick = ({ target }) => {
    if (target.innerHTML === 'Meals') {
      const mealsArray = data.filter((recipe) => recipe.type === 'meal');
      setDataFiltered(mealsArray);
    } else if (target.innerHTML === 'Drinks') {
      const drinksArray = data.filter((recipe) => recipe.type === 'drink');
      setDataFiltered(drinksArray);
    } else {
      setDataFiltered(data);
    }
  };
  return (
    <>
      <Header />
      <button
        data-testid="filter-by-meal-btn"
        onClick={ (event) => handleClick(event) }
      >
        Meals

      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ (event) => handleClick(event) }
      >
        Drinks

      </button>
      <button
        data-testid="filter-by-all-btn"
        onClick={ (event) => handleClick(event) }
      >
        All

      </button>
      {dataFiltered && dataFiltered.map((recipe, index) => {
        if (recipe.type === 'meal') {
          return <DoneRecipeMeals recipe={ recipe } index={ index } key={ recipe.id } />;
        }
        return <DoneRecipeDrinks recipe={ recipe } index={ index } key={ recipe.id } />;
      })}
    </>
  );
}

export default DoneRecipePage;
