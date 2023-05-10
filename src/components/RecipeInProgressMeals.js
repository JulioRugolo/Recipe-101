import React from 'react';

function RecipeInProgressMeals() {
  return (
    <div>
      <img data-testid="recipe-photo" src="" alt="recipe-foto" />
      <h3 data-testid="recipe-title">Title</h3>
      <p data-testid="recipe-category">category</p>
      <button
        data-testid="share-btn"
        className="shareRecipe"
      >
        Compartilhar
      </button>
      <button
        data-testid="favorite-btn"
        className="favoriteRecipe"
      >
        Favoritar
      </button>
      <p data-testid="instructions">instructions</p>
      <button data-testid="finish-recipe-btn"> Finalizar receita </button>
    </div>
  );
}

export default RecipeInProgressMeals;
