import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBarDrinks';
import Footer from '../components/Footer';
import FilterComponent from '../components/FilterComponent';

const FILTER_NUMBER = 5;

function Drinks(props) {
  const {
    setTitle,
    dataDrinks,
    initialDataDrinks,
    setDataDrinks } = useContext(AppContext);
  const { history } = props;
  const VALIDATE_ARRAY = 12;

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
    <main className="recipeContainer">
      <Header />
      <SearchBar />
      <Footer { ...props } />
      <section className="filters">
        {categorys.map((category, index) => (
          index < FILTER_NUMBER && <FilterComponent { ...category } key={ index } />
        ))}
        <button
          data-testid="All-category-filter"
          onClick={ () => setDataDrinks(initialDataDrinks) }
        >
          All

        </button>
      </section>
      <section className="cardContainer">
        {dataDrinks
          ? dataDrinks.map((drink, index) =>
            /*  if (dataDrinks.length === 1) {
              history.push(`/drinks/${dataDrinks[0].idDrink}`);
            } else if (index < VALIDATE_ARRAY) { */
            (
              <a href={ `/drinks/${drink.idDrink}` } key={ drink.idDrink }>
                <div
                  data-testid={ `${index}-recipe-card` }
                  key={ drink.idDrink }
                  className="recipeCard"
                >
                  <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
                  <img
                    src={ drink.strDrinkThumb }
                    width="100px"
                    alt={ drink.strDrink }
                    data-testid={ `${index}-card-img` }
                  />
                </div>
              </a>
            ),
            /*  } */
            /*  return index; */
          ) : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      </section>
    </main>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Drinks;
