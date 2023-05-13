import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import './recipe.css';
import FilterComponent from '../components/FilterComponent';
import RecipeCard from '../components/RecipeCard';

function Recipes(props) {
  const { setTitle,
    dataMeals,
    initialDataMeals,
    setDataMeals,
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
    <main className="recipeContainer">
      <Header />
      <SearchBar />
      <button
        data-testid="gotodone"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        data-testid="favorites"
        onClick={ () => history.push('/favorite-recipes') }
      >
        FavoriteRecipes
      </button>
      <section className="filters">
        {categorys.map((category, index) => (
          index < FILTER_NUMBER && <FilterComponent { ...category } key={ index } />
        ))}
        <button
          data-testid="All-category-filter"
          onClick={ () => {
            setDataMeals(initialDataMeals);
            setNoFilters(false);
          } }
        >
          All

        </button>
      </section>
      <section className="cardContainer">
        {dataMeals
          ? dataMeals.map((meal, index) => index < VALIDATE_ARRAY
          && <RecipeCard key={ meal.idMeal } recipe={ meal } index={ index } />)
          : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      </section>
      <Footer { ...props } />
    </main>
  );
}

Recipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Recipes;
