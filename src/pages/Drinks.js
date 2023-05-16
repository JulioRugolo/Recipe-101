import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import FilterComponent from '../components/FilterComponent';

const FILTER_NUMBER = 5;
const VALIDATE_ARRAY = 12;

function Drinks(props) {
  const {
    setTitle,
    dataDrinks,
    initialDataDrinks,
    setDataDrinks } = useContext(AppContext);
  const { history } = props;

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    async function fetchCategorys() {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const data = await response.json();
      setCategorys(data.drinks);
    }
    fetchCategorys();
    setTitle('Drinks');
  }, [setTitle, setCategorys]);

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
              setDataDrinks(initialDataDrinks);
              setNoFilters(false);
            } }
          >
            All

          </button>
        </div>
      </section>
      <main className="recipeContainer">
        <section className="cardContainer">
          {dataDrinks
            ? dataDrinks.map((drink, index) => {
              if (dataDrinks.length === 1) {
                history.push(`/drinks/${dataDrinks[0].idDrink}`);
              } else if (index < VALIDATE_ARRAY) {
                return (
                  <a href={ `/meals/${drink.idDrink}` } key={ drink.idDrink }>
                    <div
                      data-testid={ `${index}-recipe-card` }
                      className="recipeCard"
                      key={ drink.idDrink }
                    >
                      <div className="image">
                        <img
                          src={ drink.strDrinkThumb }
                          width="100px"
                          alt={ drink.strDrink }
                          data-testid={ `${index}-card-img` }
                        />
                      </div>
                      <div className="recipeInfo">
                        <h3 data-testid={ `${index}-card-name` }>{drink.strDrink}</h3>
                        <span>
                          Category:
                          {' '}
                          {drink.strCategory}
                        </span>
                        <p>{drink.strInstructions}</p>
                        <p>
                          Time to prepare:
                          {' '}
                          {parseInt(Math.random() * 10, 10) + 5}
                          m
                        </p>
                      </div>
                    </div>
                  </a>
                );
              }
            }) : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
        </section>
        <Footer { ...props } />
      </main>
    </>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Drinks;
