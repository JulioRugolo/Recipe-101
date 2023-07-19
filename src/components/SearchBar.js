import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { controlInput, setUrlMeals } = useContext(AppContext);
  const [type, setType] = useState('');

  const handleClick = async () => {
    if (type === 'ingredient') {
      setUrlMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${controlInput}`);
    } else if (type === 'name') {
      setUrlMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${controlInput}`);
    } else if (type === 'firstletter' && controlInput.length === 1) {
      setUrlMeals(`https://www.themealdb.com/api/json/v1/1/search.php?f=${controlInput}`);
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
      </div>
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </nav>
  );
}

export default SearchBar;
