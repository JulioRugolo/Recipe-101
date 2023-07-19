import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function FavoriteButton(props) {
  const { recipe, testId } = props;
  const mealOrDrink = recipe.idDrink === undefined ? recipe.idMeal : recipe.idDrink;
  const favoriteKey = 'favoriteRecipes';
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    const retrieveLocal = JSON.parse(localStorage.getItem(favoriteKey));
    const isFavorite = retrieveLocal
        && retrieveLocal
          .some((item) => item.id === mealOrDrink);
    setHeart(isFavorite);
  }, [mealOrDrink]);

  const handleClick = () => {
    const retrieveLocal = JSON.parse(localStorage.getItem(favoriteKey));
    const isFavorite = retrieveLocal && retrieveLocal
      .some((item) => item.id === mealOrDrink);
    const recipeToSave = {
      id: recipe.idMeal !== undefined ? recipe.idMeal : recipe.idDrink,
      type: recipe.idMeal !== undefined ? 'meal' : 'drink',
      nationality: recipe.strArea === undefined ? '' : recipe.strArea,
      category: recipe.idMeal !== undefined ? recipe.strCategory : recipe.strCategory,
      alcoholicOrNot: recipe.idMeal !== undefined ? '' : 'Alcoholic',
      name: recipe.idMeal !== undefined ? recipe.strMeal : recipe.strDrink,
      image: recipe.idMeal !== undefined ? recipe.strMealThumb : recipe.strDrinkThumb,
    };

    if (retrieveLocal && isFavorite === false) {
      localStorage.setItem(
        favoriteKey,
        JSON.stringify([...retrieveLocal, recipeToSave]),
      );
      setHeart(!heart);
    } else if (isFavorite) {
      const removeRecipe = retrieveLocal.filter((item) => item.id !== mealOrDrink);
      localStorage.setItem(favoriteKey, JSON.stringify(removeRecipe));
      setHeart(!heart);
    } else {
      localStorage.setItem(
        favoriteKey,
        JSON.stringify([recipeToSave]),
      );
      setHeart(!heart);
    }
  };

  return (
    <button
      data-testid={ testId || 'favorite-btn' }
      className={ testId || 'favoriteRecipe' }
      onClick={ () => handleClick() }
      src={ !heart ? whiteHeartIcon : blackHeartIcon }
    >
      <img src={ !heart ? whiteHeartIcon : blackHeartIcon } alt="favorite" />
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
  testId: PropTypes.string.isRequired,
};

export default FavoriteButton;
