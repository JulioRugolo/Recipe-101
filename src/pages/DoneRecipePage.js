import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import ShareButton from '../components/buttons/ShareButton';

function DoneRecipePage() {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  const DONE_RECIPES = 'doneRecipes';
  const data = JSON.parse(localStorage.getItem(DONE_RECIPES));
  useEffect(() => {
    setTitle('Done Recipes');
    setFavoriteOrProfile(true);
  });
  return (
    <>
      <Header />
      <button
        data-testid="filter-by-all-btn"
      >
        All

      </button>
      <button
        data-testid="filter-by-meal-btn"
      >
        Meals

      </button>
      <button
        data-testid="filter-by-drink-btn"
      >
        Drinks

      </button>
      {data && data.map((recipe, index) => (
        <section key={ recipe.id }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <h1 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h1>
          <h2 data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</h2>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          {recipe.tags.map((tag, indexT) => (
            <span
              key={ indexT }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            />
          ))}
          <ShareButton id={ recipe.id } testId={ `${index}-horizontal-share-btn` } />
        </section>
      ))}
    </>
  );
}

export default DoneRecipePage;
