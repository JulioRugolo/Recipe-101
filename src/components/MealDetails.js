import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './Startrecipe.css';
import ShareButton from './buttons/ShareButton';
import FavoriteButton from './buttons/FavoriteButton';

function MealDetails() {
  const [dataRecipesMeals, setDataRecipesMeals] = useState([]);
  const { dataDrinks, copyId } = useContext(AppContext);
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
      if (mealsPage === 'meals') {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idPage}`;
        const response = await fetch(url);
        const data = await response.json();
        setDataRecipesMeals(data.meals);
        setRecipe({ ...data.meals[0] });
      }
    }
    fetchRecipesMeals();
  }, [location]);
  return (
    dataRecipesMeals && dataRecipesMeals.map((recipeMeal) => {
      const objectEntries = Object.entries(recipeMeal);
      const mapToFilterMeasures = objectEntries
        .filter((entrie) => entrie[0].includes('strMeasure'))
        .filter((ingredient) => {
          if (ingredient[1] !== null) {
            return `${ingredient[0]}:${ingredient[1]}`;
          }
          return console.log('');
        });
      const mapToFilterIngredients = objectEntries
        .filter((entrie) => entrie[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1]
        !== null && `${ingredient[0]}:${ingredient[1]}`);
      return (
        <div key={ recipeMeal.idMeal }>
          <h3 data-testid="recipe-title">{recipeMeal.strMeal}</h3>
          <img
            data-testid="recipe-photo"
            src={ recipeMeal.strMealThumb }
            alt={ recipeMeal.strMeal }
          />
          <p data-testid="recipe-category">{recipeMeal.strCategory}</p>
          <p data-testid="instructions">{recipeMeal.strInstructions}</p>
          {
            mapToFilterIngredients.map((ingredient, index) => (
              <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${ingredient[1]} ${mapToFilterMeasures[index][1]} `}
              </p>

            ))
          }
          <iframe
            data-testid="video"
            title="Youtube video player"
            allow="accelerometer; autoplay;
               clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width="420"
            height="315"
            src={ recipeMeal.strYoutube.replace('/watch?v=', '/embed/') }
          />
          <section className="recomendations">
            {dataDrinks.map((item, index) => index < RECOMENDATIONS_QUANTITY
              && (
                <a
                  href={ `/drinks/${item.idDrink}}` }
                  key={ item.idDrink }
                  data-testid={ `${index}-recommendation-card` }
                >
                  <div className="recomendationsCard">
                    <p
                      data-testid={ `${index}-recommendation-title` }
                    >
                      {item.strDrink}
                    </p>
                    <img
                      src={ item.strDrinkThumb }
                      width="100px"
                      alt={ item.strDrink }
                      data-testid={ `${index}-card-img` }
                    />
                  </div>
                </a>))}
            {/* {dataDrinks.map((item, index) => {
              if (index < RECOMENDATIONS_QUANTITY) {
                return (
                  <a
                    href={ `/drinks/${item.idDrink}}` }
                    key={ item.idDrink }
                    data-testid={ `${index}-recommendation-card` }
                  >
                    <div className="recomendationsCard">
                      <p
                        data-testid={ `${index}-recommendation-title` }
                      >
                        {item.strDrink}
                      </p>
                      <img
                        src={ item.strDrinkThumb }
                        width="100px"
                        alt={ item.strDrink }
                        data-testid={ `${index}-card-img` }
                      />
                    </div>
                  </a>
                );
              }
            })} */}
          </section>
          {copyId && <p>Link copied!</p>}
          <button
            data-testid="start-recipe-btn"
            className="startRecipe"
            onClick={ () => {
              const idPage = location.pathname.split('/')[2];
              history.push(`/meals/${idPage}/in-progress`);
            } }
          >
            {inProgress ? 'Continue Recipe' : START_RECIPES}

          </button>
          <ShareButton
            id={ id }
            type="meals"
          />
          <FavoriteButton recipe={ recipe } />
        </div>
      );
    })

  );
}

export default MealDetails;
