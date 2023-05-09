import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function RecipeDetails() {
  const [dataRecipesMeals, setDataRecipesMeals] = useState([]);
  const [dataRecipesDrinks, setDataRecipesDrinks] = useState([]);
  const location = useLocation();

  // const fetchRecipesMeals = async () => {
  //   const idPage = location.pathname.split('/')[2];
  //   const mealsPage = location.pathname.split('/')[1];
  //   if (mealsPage === 'meals') {
  //     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idPage}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setDataRecipesMeals(data.meals);
  //   } else {
  //     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idPage}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setDataRecipesDrinks(data.drinks);
  //   }
  // };
  // console.log(dataRecipesMeals);
  // console.log(dataRecipesDrinks);
  useEffect(() => {
    // fetchRecipesMeals();
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
      <h1 data-testid="detail-title">detalhes comida</h1>
      {
        dataRecipesMeals && dataRecipesMeals.map((recipeMeal) => (
          <div key={ recipeMeal.idMeal }>
            <p>{recipeMeal.strIngredient3}</p>
          </div>
        ))
      }
      {
        dataRecipesDrinks && dataRecipesDrinks.map((recipeDrink) => (
          <div key={ recipeDrink.idDrink }>
            <p>{recipeDrink.strIngredient3}</p>
          </div>
        ))
      }
    </div>
  );
}

// MealsDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

export default RecipeDetails;
