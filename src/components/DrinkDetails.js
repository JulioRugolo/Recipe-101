/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './Startrecipe.css';
import ShareButton from './buttons/ShareButton';
import FavoriteButton from './buttons/FavoriteButton';

import './RecipeDetails.css';

function DrinkDetails() {
  const [dataRecipesDrinks, setDataRecipesDrinks] = useState([]);
  const { dataMeals, copyId } = useContext(AppContext);
  const location = useLocation();
  const RECOMENDATIONS_QUANTITY = 6;
  const inProgress = localStorage.getItem('inProgressRecipes');
  const history = useHistory();
  const START_RECIPES = 'Start Recipe';
  const [id, setId] = useState('');
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchRecipesMeals() {
      const idPage = location.pathname.split('/')[2];
      const mealsPage = location.pathname.split('/')[1];
      setId(idPage);
      if (mealsPage === 'drinks') {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idPage}`;
        const response = await fetch(url);
        const data = await response.json();
        setDataRecipesDrinks(data.drinks);
        setRecipe({ ...data.drinks[0] });
      }
    }
    fetchRecipesMeals();
  }, [location, setDataRecipesDrinks]);

  return (
    dataRecipesDrinks && dataRecipesDrinks.map((recipeDrink) => {
      const objectEntries = Object.entries(recipeDrink);
      const mapToFilterMeasures = objectEntries
        .filter((entrie) => entrie[0].includes('strMeasure'))
        .filter((ingredient) => {
          if (ingredient[1] !== null) {
            return `${ingredient[0]}:${ingredient[1]}`;
          }
        });
      const mapToFilterIngredients = objectEntries
        .filter((entrie) => entrie[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1]
        !== null && `${ingredient[0]}:${ingredient[1]}`);
      return (
        <div key={ recipeDrink.idDrink } className="recipe-details">
          <img
            data-testid="recipe-photo"
            src={ recipeDrink.strDrinkThumb }
            alt={ recipeDrink.strDrink }
          />
          <h3 data-testid="recipe-title">{recipeDrink.strDrink}</h3>
          <p
            data-testid="recipe-category"
            className="recipe-category"
          >
            {recipeDrink.strAlcoholic}

          </p>
          <div className="recipe-intructions">
            <p
              data-testid="instructions"
            >
              {recipeDrink.strInstructions}
            </p>

          </div>
          {
            mapToFilterIngredients.map((ingredient, index) => (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
                className="recipe-ingredient"
              >
                {`${ingredient[1]} ${mapToFilterMeasures[index][1]} `}
              </p>

            ))
          }
          {recipeDrink.strYoutube && <iframe
            data-testid="video"
            title="Youtube video player"
            allow="accelerometer; autoplay;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width="420"
            height="315"
            src={ recipeDrink.strVideo.replace('/watch?v=', '/embed/') }
          />}
          <section className="recomendations">
            {dataMeals.map((item, index) => index < RECOMENDATIONS_QUANTITY
              && (
                <a
                  href={ `/drinks/${item.idMeal}}` }
                  key={ item.idMeal }
                  data-testid={ `${index}-recommendation-card` }
                >
                  <div className="recomendationsCard">
                    <div className="recomendationsCardImage">
                      <img
                        src={ item.strMealThumb }
                        width="100px"
                        alt={ item.strDrink }
                        data-testid={ `${index}-card-img` }
                      />
                    </div>
                    <div className="recomendationsCardName">
                      <h6
                        data-testid={ `${index}-recommendation-title` }
                      >
                        {item.strMeal}
                      </h6>
                    </div>
                  </div>
                </a>))}
          </section>

          <section className="button-container">
            <button
              data-testid="start-recipe-btn"
              className="startRecipe btn btn-warning"
              onClick={ () => {
                const idPage = location.pathname.split('/')[2];
                history.push(`/drinks/${idPage}/in-progress`);
              } }
            >
              {inProgress ? 'Continue Recipe' : START_RECIPES}

            </button>
            <ShareButton
              id={ id }
              type="drinks"
            />
            {copyId && <p>Link copied!</p>}
            <FavoriteButton recipe={ recipe } />
          </section>
        </div>
      );
    })

  );
}

export default DrinkDetails;
