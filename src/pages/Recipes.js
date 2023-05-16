import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import './recipe.css';
import FilterComponent from '../components/FilterComponent';
// import RecipeCard from '../components/RecipeCard';

function Recipes(props) {
  const { setTitle,
    dataMeals,
    initialDataMeals,
    setDataMeals,
    noFilters,
    setNoFilters,
  } = useContext(AppContext);
  const { history } = props;
  const VALIDATE_ARRAY = 12;
  const FILTER_NUMBER = 5;

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    async function fetchCategorys() {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const data = await response.json();
      setCategorys(data.meals);
    }
    fetchCategorys();
    setTitle('Meals');
  }, [setTitle, setCategorys, dataMeals]);

  return (
    <>
      <Header />
      <section className="filters">
        <div className="filterButtons">
          {categorys.map((category, index) => (
            index < FILTER_NUMBER && <FilterComponent { ...category } key={ index } />
          ))}
          <button
            data-testid="All-category-filter"
            className="btn btn-outline-warning"
            onClick={ () => {
              setDataMeals(initialDataMeals);
              setNoFilters(false);
            } }
          >
            All

          </button>
        </div>
      </section>
      <main className="recipeContainer">

        <section className="cardContainer">
          {dataMeals
            ? dataMeals.map((meal, index) => {
              if (dataMeals.length === 1 && !noFilters) {
                history.push(`/meals/${dataMeals[0].idMeal}`);
              } else if (index < VALIDATE_ARRAY) {
                return (
                  <a href={ `/meals/${meal.idMeal}` } key={ meal.idMeal }>
                    <div
                      data-testid={ `${index}-recipe-card` }
                      className="recipeCard"
                      key={ meal.idMeal }
                    >
                      <div className="image">
                        <img
                          src={ meal.strMealThumb }
                          width="100px"
                          alt={ meal.strMeal }
                          data-testid={ `${index}-card-img` }
                        />
                      </div>
                      <div className="recipeInfo">
                        <h3 data-testid={ `${index}-card-name` }>{meal.strMeal}</h3>
                        <span>
                          Category:
                          {' '}
                          {meal.strCategory}
                        </span>
                        <p>{meal.strInstructions}</p>
                        <p>
                          Time to prepare:
                          {' '}
                          {parseInt(Math.random() * 50, 10) + 5}
                          m
                        </p>
                      </div>
                    </div>
                  </a>

                );
              }
              return console.log('');
            }) : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
        </section>
        <Footer { ...props } />
      </main>
    </>
  );
}

Recipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Recipes;
