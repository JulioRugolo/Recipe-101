import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function FilterComponent(props) {
  const { strCategory } = props;
  const { title,
    initialDataMeals,
    initialDataDrinks,
    setDataMeals,
    setDataDrinks } = useContext(AppContext);
  const [mealsClick, setMealsClick] = useState(true);
  const [drinkClick, setDrinkClick] = useState(true);

  const applyFilter = async ({ target }) => {
    if (title === 'Meals') {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.innerHTML}`;
      const response = await fetch(url);
      const data = await response.json();
      setMealsClick(!mealsClick);
      return (mealsClick ? setDataMeals(data.meals) : setDataMeals(initialDataMeals));
    }
    if (title === 'Drinks') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.innerHTML}`;
      const response = await fetch(url);
      const data = await response.json();
      setDrinkClick(!drinkClick);
      return (drinkClick ? setDataDrinks(data.drinks) : setDataDrinks(initialDataDrinks));
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
