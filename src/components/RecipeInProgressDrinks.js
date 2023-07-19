import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ShareButton from './buttons/ShareButton';
import FavoriteButton from './buttons/FavoriteButton';
import AppContext from '../context/AppContext';
import Checkbox from './buttons/Checkbox';
import ButtonValidator from './buttons/FinishRecipe';

function RecipeInProgressMeals() {
  const location = useLocation();
  const { copyId } = useContext(AppContext);
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeButton, setRecipeButton] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    async function fetchRecipesMeals() {
      const idPage = location.pathname.split('/')[2];
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
      setRecipeButton({ ...data.drinks[0] });
      setId(idPage);
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
            <Checkbox
              key={ index }
              type="drinks"
              id={ recipeDetail.idDrink }
              index={ index }
              ingredients={ index }
              name={ recipeDrink[1] }
            />
          ))}
        </section>
        {copyId && <p>Link copied!</p>}
        <ShareButton id={ id } type="drinks" />
        <FavoriteButton recipe={ recipeButton } />
        <p data-testid="instructions">{recipeDetail.strInstructions}</p>
        <ButtonValidator numberOfCheckbox={ ingredients.length } recipe={ recipe[0] } />
      </div>
    ))

  );
}

export default RecipeInProgressMeals;
