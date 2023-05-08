import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import './recipe.css';

function Recipes(props) {
  const { setTitle, dataMeals } = useContext(AppContext);
  const { history } = props;
  const VALIDATE_ARRAY = 12;

  useEffect(() => {
    setTitle('Meals');
  });

  return (
    <main className="recipeContainer">
      <Header />
      <SearchBar />
      <Footer { ...props } />
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
      <section className="cardContainer">
        {dataMeals
          ? dataMeals.map((meal, index) => {
            if (dataMeals.length === 1) {
              history.push(`/meals/${dataMeals[0].idMeal}`);
            } else if (index < VALIDATE_ARRAY) {
              return (

                <div
                  data-testid={ `${index}-recipe-card` }
                  className="recipeCard"
                  key={ meal.idMeal }
                >
                  <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
                  <img
                    src={ meal.strMealThumb }
                    width="100px"
                    alt={ meal.strMeal }
                    data-testid={ `${index}-card-img` }
                  />
                </div>

              );
            }
            return console.log(index);
          }) : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      </section>

    </main>
  );
}

Recipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Recipes;
