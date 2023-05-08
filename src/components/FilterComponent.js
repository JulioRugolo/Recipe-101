import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function FilterComponent(props) {
  const { strCategory } = props;
  const { title, setDataMeals, setDataDrinks } = useContext(AppContext);

  const applyFilter = async ({ target }) => {
    if (title === 'Meals') {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.innerHTML}`;
      const response = await fetch(url);
      const data = await response.json();
      setDataMeals(data.meals);
    } else {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.innerHTML}`;
      const response = await fetch(url);
      const data = await response.json();
      setDataDrinks(data.drinks);
    }
  };
  return (
    <button
      data-testid={ `${strCategory}-category-filter` }
      onClick={ (event) => applyFilter(event) }
    >
      {strCategory}
    </button>

  );
}

FilterComponent.propTypes = {
  strCategory: PropTypes.string.isRequired,
};

export default FilterComponent;
