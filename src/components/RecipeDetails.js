import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function RecipeDetails() {
  const [dataRecipesMeals, setDataRecipesMeals] = useState([]);
  const [dataRecipesDrinks, setDataRecipesDrinks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchRecipesMeals() {
      const idPage = location.pathname.split('/')[2];
      const mealsPage = location.pathname.split('/')[1];
      if (mealsPage === 'meals') {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idPage}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.meals);
        setDataRecipesMeals(data.meals);
      } else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idPage}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.drinks);
        setDataRecipesDrinks(data.drinks);
      }
    }
    fetchRecipesMeals();
  }, [location]);
  return (
    <div>
      {
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
            .filter((ingredient) => {
              if (ingredient[1] !== null) {
                return `${ingredient[0]}:${ingredient[1]}`;
              }
              return console.log('');
            });
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
            </div>
          );
        })
      }
      {
        dataRecipesDrinks && dataRecipesDrinks.map((recipeDrink) => {
          const objectEntries = Object.entries(recipeDrink);
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
            .filter((ingredient) => {
              if (ingredient[1] !== null) {
                return `${ingredient[0]}:${ingredient[1]}`;
              }
              return console.log('');
            });
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
            </div>
          );
        })
      }
    </div>
  );
}

export default RecipeDetails;
