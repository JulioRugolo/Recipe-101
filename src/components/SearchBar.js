import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { controlInput, setDataApi } = useContext(AppContext);
  const [type, setType] = useState('');

  const fetchApi = async (endpoint) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    setDataApi(data.meals);
  };

  const handleClick = () => {
    if (type === 'ingredient') {
      fetchApi(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${controlInput}`);
    } else if (type === 'name') {
      fetchApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${controlInput}`);
    } else if (type === 'firstletter' && controlInput.length === 1) {
      fetchApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${controlInput}`);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <nav>
      <div>
        <label>
          <input
            // onClick={ () => setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${controlInput}`) }
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
            // onChange={ () => setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${controlInput}`) }
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
            // onChange={ () => setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${controlInput}`) }
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
