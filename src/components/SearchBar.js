import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { title, controlInput, setUrlMeals, setUrlDrinks } = useContext(AppContext);
  const [type, setType] = useState('');

  // const fetchApi = async (endpoint) => {
  //   const response = await fetch(endpoint);
  //   const data = await response.json();
  //   setDataApi(data.meals);
  // };

  const handleClick = async () => {
    if (title === 'Meals') {
      if (type === 'ingredient') {
        setUrlMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${controlInput}`);
      } else if (type === 'name') {
        setUrlMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${controlInput}`);
      } else if (type === 'firstletter' && controlInput.length === 1) {
        setUrlMeals(`https://www.themealdb.com/api/json/v1/1/search.php?f=${controlInput}`);
      } else {
        global.alert('Your search must have only 1 (one) character');
      }
    } else if (type === 'ingredient') {
      setUrlDrinks(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${controlInput}`);
    } else if (type === 'name') {
      setUrlDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${controlInput}`);
    } else if (type === 'firstletter' && controlInput.length === 1) {
      setUrlDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${controlInput}`);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <nav>
      <div>
        <label>
          <input
            onClick={ (e) => setType(e.target.id) }
            id="ingredient"
            name="radioSearch"
            type="radio"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label>
          <input
            onClick={ (e) => setType(e.target.id) }
            id="name"
            name="radioSearch"
            type="radio"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label>
          <input
            onClick={ (e) => setType(e.target.id) }
            id="firstletter"
            name="radioSearch"
            type="radio"
            data-testid="first-letter-search-radio"
          />
          Primeira Letra
        </label>
        <button
          type="button"
          onClick={ () => handleClick() }
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default SearchBar;
