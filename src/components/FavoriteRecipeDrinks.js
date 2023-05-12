import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ShareButton from './buttons/ShareButton';
import AppContext from '../context/AppContext';
import FavoriteButton from './buttons/FavoriteButton';

function FavoriteRecipeDrinks(props) {
  const { recipe, index } = props;
  const { copyId } = useContext(AppContext);
  return (
    <section key={ recipe.id }>
      <a href={ `http://localhost:3000/drinks/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
          width="200px"
        />
      </a>
      <a href={ `http://localhost:3000/drinks/${recipe.id}` }>
        <h1 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h1>
      </a>
      <h2
        data-testid={ `${index}-horizontal-top-text` }
      >
        {`${recipe.alcoholicOrNot}`}

      </h2>
      {copyId && <p>Link copied!</p>}
      <ShareButton
        id={ recipe.id }
        testId={ `${index}-horizontal-share-btn` }
        type="drinks"
      />
      <FavoriteButton recipe testId={ `${index}-horizontal-favorite-btn` } />
    </section>
  );
}

FavoriteRecipeDrinks.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;

export default FavoriteRecipeDrinks;
