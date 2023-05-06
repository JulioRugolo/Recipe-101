import React from 'react';

function SearchBar() {
  return (
    <nav>
      <div>
        <label>
          <input
            name="radioSearch"
            type="radio"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label>
          <input
            name="radioSearch"
            type="radio"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label>
          <input
            name="radioSearch"
            type="radio"
            data-testid="first-letter-search-radio"
          />
          Primeira Letra
        </label>
        <button data-testid="exec-search-btn">Search</button>
      </div>
    </nav>
  );
}

export default SearchBar;
