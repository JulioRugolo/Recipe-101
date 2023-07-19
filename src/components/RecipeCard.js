import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard(props) {
  const { recipe, index } = props;
  return (
    <a
      href={ recipe.idMeal === undefined
        ? `/drinks/${recipe.idDrink}`
        : `/meals/${recipe.idMeal}` }
    >
      <div
        data-testid={ `${index}-recipe-card` }
        className="recipeCard"
      >
        <p
          data-testid={ `${index}-card-name` }
        >
          {recipe.idMeal === undefined ? recipe.strDrink : recipe.strMeal}

        </p>
        <img
          src={ recipe.idMeal === undefined ? recipe.strDrinkThumb : recipe.strMealThumb }
          width="100px"
          alt={ recipe.idMeal === undefined ? recipe.strDrink : recipe.strMeal }
          data-testid={ `${index}-card-img` }
        />
      </div>
    </a>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
