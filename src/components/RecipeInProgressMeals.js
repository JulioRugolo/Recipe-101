import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import FavoriteButton from './buttons/FavoriteButton';
import ShareButton from './buttons/ShareButton';
import Checkbox from './buttons/Checkbox';
import ButtonValidator from './buttons/FinishRecipe';

import './RecipeInProgress.css';

function RecipeInProgressMeals() {
  const location = useLocation();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [id, setId] = useState('');
  const [recipeButton, setRecipeButton] = useState([]);

  useEffect(() => {
    async function fetchRecipesMeals() {
      const idPage = location.pathname.split('/')[2];
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idPage}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data.meals);
      const objectEntries = Object.entries(data.meals[0]);
      const mapToFilterIngredients = objectEntries
        .filter((entrie) => entrie[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1]
      !== null && ingredient[1] !== '');
      setIngredients(mapToFilterIngredients);
      setRecipeButton({ ...data.meals[0] });
      setId(idPage);
    }
    fetchRecipesMeals();
  }, [location]);

  return (
    recipe.map((recipeDetail) => (
      <div key={ recipeDetail.idMeal } className="recipe-inProgress">
        <img
          data-testid="recipe-photo"
          src={ recipeDetail.strMealThumb }
          alt="recipe-foto"
          width="300px"
        />
        <h3 data-testid="recipe-title">{recipeDetail.strMeal}</h3>
        <p data-testid="recipe-category">{recipeDetail.strCategory}</p>
        <section className="ingredients">
          {ingredients.map((recipeMeal, index) => (
            <Checkbox
              key={ index }
              type="meals"
              id={ recipeDetail.idMeal }
              index={ index }
              ingredients={ index }
              name={ recipeMeal[1] }
            />
          ))}
        </section>
        <div className="recipe-intructionsInProgress">
          <p data-testid="instructions">{recipeDetail.strInstructions}</p>
        </div>

        <section className="button-container">
          <ButtonValidator numberOfCheckbox={ ingredients.length } recipe={ recipe[0] } />
          <ShareButton id={ id } />
          <FavoriteButton recipe={ recipeButton } />
        </section>
      </div>
    ))

  );
}

export default RecipeInProgressMeals;
