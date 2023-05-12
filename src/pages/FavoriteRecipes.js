import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import FavoriteRecipeMeals from '../components/FavoriteRecipeMeals';
import FavoriteRecipeDrinks from '../components/FavoriteRecipeDrinks';

const FAVORITE_RECIPES = 'favoriteRecipes';

function FavoritesRecipes() {
  const data = JSON.parse(localStorage.getItem(FAVORITE_RECIPES));
  const [dataFiltered, setDataFiltered] = useState(data);
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Favorite Recipes');
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
          return (<FavoriteRecipeMeals
            recipe={ recipe }
            index={ index }
            key={ recipe.id }
          />);
        }
        return (<FavoriteRecipeDrinks
          recipe={ recipe }
          index={ index }
          key={ recipe.id }
        />);
      })}
    </>
  );
}

export default FavoritesRecipes;
