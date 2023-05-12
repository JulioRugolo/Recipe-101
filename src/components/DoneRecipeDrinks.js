import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ShareButton from './buttons/ShareButton';
import AppContext from '../context/AppContext';

function DoneRecipeDrinks(props) {
  const { recipe, index } = props;
  const { copyId } = useContext(AppContext);
  return (
    <section key={ recipe.id }>
      <img
        src={ recipe.image }
        alt={ recipe.name }
        data-testid={ `${index}-horizontal-image` }
      />
      <h1 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h1>
      <h2
        data-testid={ `${index}-horizontal-top-text` }
      >
        {`${recipe.alcoholicOrNot}`}

      </h2>
      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
      {recipe.tags.map((tag, indexT) => (
        <span
          key={ indexT }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}

        </span>
      ))}
      {copyId && <p>Link copied!</p>}
      <ShareButton
        id={ recipe.id }
        testId={ `${index}-horizontal-share-btn` }
        type="drinks"
      />
    </section>
  );
}

DoneRecipeDrinks.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;

export default DoneRecipeDrinks;
