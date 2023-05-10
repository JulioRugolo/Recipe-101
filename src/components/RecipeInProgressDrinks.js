import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function RecipeInProgressMeals() {
  const location = useLocation();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    async function fetchRecipesMeals() {
      const idPage = location.pathname.split('/')[2];
      const mealsPage = location.pathname.split('/')[1];
      if (mealsPage === 'drinks') {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idPage}`;
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data.drinks);
        const objectEntries = Object.entries(data.drinks[0]);
        const mapToFilterIngredients = objectEntries
          .filter((entrie) => entrie[0].includes('strIngredient'))
          .filter((ingredient) => ingredient[1]
        !== null && ingredient[1] !== '');
        setIngredients(mapToFilterIngredients);
      }
    }
    fetchRecipesMeals();
  }, [location]);

  return (
    recipe.map((recipeDetail) => (
      <div key={ recipeDetail.idDrink }>
        <img
          data-testid="recipe-photo"
          src={ recipeDetail.strDrinkThumb }
          alt="recipe-foto"
          width="300px"
        />
        <h3 data-testid="recipe-title">{recipeDetail.strDrink}</h3>
        <p data-testid="recipe-category">{recipeDetail.strCategory}</p>
        <section className="ingridients">
          {ingredients.map((recipeDrink, index) => (
            <label
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              htmlFor={ `${index}-ingredient-step` }
            >
              <input
                id={ `${index}-ingredient-step` }
                type="checkbox"
                name={ `${index}-ingredient-step` }
              />
              {recipeDrink[1]}
            </label>
          ))}
        </section>
        <button
          data-testid="share-btn"
          className="shareRecipe"
        >
          Compartilhar
        </button>
        <button
          data-testid="favorite-btn"
          className="favoriteRecipe"
        >
          Favoritar
        </button>
        <p data-testid="instructions">{recipeDetail.strInstructions}</p>
        <button data-testid="finish-recipe-btn"> Finalizar receita </button>
      </div>
    ))

  );
}

export default RecipeInProgressMeals;
