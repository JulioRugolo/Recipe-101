import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function FavoriteButton(props) {
  const { recipe } = props;
  const location = useLocation();
  const mealsPage = location.pathname.split('/')[1];
  const favoriteKey = 'favoriteRecipes';
  const mealOrDrink = mealsPage === 'meals' ? recipe.idMeal : recipe.idDrink;
  const arrayLocalStorage = JSON.parse(localStorage.getItem(favoriteKey));
  const isFavorite = arrayLocalStorage
    ? arrayLocalStorage
      .find((item) => item.id === mealOrDrink) : false;

  const handleClick = (event) => {
    event.preventDefault();
    console.log(recipe);
    const mealToSave = {
      id: recipe.idMeal ? recipe.idMeal : '',
      type: 'meal',
      nationality: recipe.strArea ? recipe.strArea : '',
      category: recipe.strCategory ? recipe.strCategory : '',
      alcoholicOrNot: '',
      name: recipe.strMeal ? recipe.strMeal : '',
      image: recipe.strMealThumb ? recipe.strMealThumb : '',
    };

    const drinkToSave = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
    const retrieveLocalStorage = JSON.parse(localStorage.getItem(favoriteKey));
    if (retrieveLocalStorage) {
      localStorage.setItem(
        favoriteKey,
        JSON.stringify([...retrieveLocalStorage, mealsPage === 'meals'
          ? mealToSave : drinkToSave]),
      );
    } else {
      localStorage.setItem(favoriteKey, JSON.stringify([mealsPage === 'meals'
        ? mealToSave : drinkToSave]));
    }
  };

  return (
    <button
      data-testid="favorite-btn"
      className="favoriteRecipe"
      onClick={ (event) => handleClick(event) }
      src={ !isFavorite ? whiteHeartIcon : blackHeartIcon }
    >
      <img src={ !isFavorite ? whiteHeartIcon : blackHeartIcon } alt="favorite" />
    </button>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.shape({
    idDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strArea: PropTypes.string,
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default FavoriteButton;
