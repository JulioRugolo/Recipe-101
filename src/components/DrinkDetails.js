import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './Startrecipe.css';
import ShareButton from './buttons/ShareButton';
import FavoriteButton from './buttons/FavoriteButton';

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
        .filter((ingredient) => ingredient[1]
        !== null && `${ingredient[0]}:${ingredient[1]}`);
      const mapToFilterIngredients = objectEntries
        .filter((entrie) => entrie[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1]
        !== null && `${ingredient[0]}:${ingredient[1]}`);
      return (
        <div key={ recipeDrink.idDrink }>
          <h3 data-testid="recipe-title">{recipeDrink.strDrink}</h3>
          <img
            data-testid="recipe-photo"
            src={ recipeDrink.strDrinkThumb }
            alt={ recipeDrink.strDrink }
          />
          <p data-testid="recipe-category">{recipeDrink.strAlcoholic}</p>
          <p data-testid="instructions">{recipeDrink.strInstructions}</p>
          {
            mapToFilterIngredients.map((ingredient, index) => (
              <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
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
            {dataMeals.map((item, index) => {
              if (index < RECOMENDATIONS_QUANTITY) {
                return (
                  <a
                    href={ `/drinks/${item.idMeal}` }
                    key={ item.idMeal }
                    data-testid={ `${index}-recommendation-card` }
                  >
                    <div className="recomendationsCard">
                      <p
                        data-testid={ `${index}-recommendation-title` }
                      >
                        {item.strMeal}
                      </p>
                      <img
                        src={ item.strMealThumb }
                        width="100px"
                        alt={ item.strMeal }
                        data-testid={ `${index}-card-img` }
                      />
                    </div>
                  </a>
                );
              }
              return console.log('');
            })}
          </section>
          {copyId && <p>Link copied!</p>}
          <button
            data-testid="start-recipe-btn"
            className="startRecipe"
            onClick={ () => {
              const idPage = location.pathname.split('/')[2];
              history.push(`/drinks/${idPage}/in-progress`);
            } }
          >
            {inProgress ? 'Continue Recipe' : START_RECIPES}

          </button>
          <ShareButton id={ id } />
          <FavoriteButton recipe={ recipe } />
        </div>
      );
    })

  );
}

export default DrinkDetails;
