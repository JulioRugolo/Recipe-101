import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import FavoriteRecipeMeals from '../components/FavoriteRecipeMeals';
import FavoriteRecipeDrinks from '../components/FavoriteRecipeDrinks';
import './favorite.css';

const FAVORITE_RECIPES = 'favoriteRecipes';

function FavoritesRecipes() {
  const data = JSON.parse(localStorage.getItem(FAVORITE_RECIPES));
  const [dataFiltered, setDataFiltered] = useState(data);
  const { setTitle, setFavoriteOrProfile, updateLocalStorage } = useContext(AppContext);

  useEffect(() => {
    setTitle('Favorite Recipes');
    setFavoriteOrProfile(true);
  }, [updateLocalStorage, setTitle, setFavoriteOrProfile]);

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
      <div className="buttonContainerFav">
        <button
          className="btn btn-outline-warning"
          data-testid="filter-by-meal-btn"
          onClick={ (event) => handleClick(event) }
        >
          Meals
        </button>
        <button
          className="btn btn-outline-warning"
          data-testid="filter-by-drink-btn"
          onClick={ (event) => handleClick(event) }
        >
          Drinks
        </button>
        <button
          className="btn btn-outline-warning"
          data-testid="filter-by-all-btn"
          onClick={ (event) => handleClick(event) }
        >
          All
        </button>
      </div>
      {dataFiltered && dataFiltered.map((recipe, index) => {
        if (recipe.type === 'meal') {
          return (
            <div key={ recipe.id } className="cardFavorite">
              <FavoriteRecipeMeals
                recipe={ recipe }
                index={ index }
                key={ recipe.id }
              />
            </div>
          );
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
