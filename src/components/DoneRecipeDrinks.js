/* eslint-disable max-len */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ShareButton from './buttons/ShareButton';
import AppContext from '../context/AppContext';

function DoneRecipeDrinks(props) {
  const { recipe, index } = props;
  const { copyId } = useContext(AppContext);
  return (
    <section key={ recipe.id } className="doneCardContainer">
      <a href={ `http://localhost:3000/drinks/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
          width="200px"
        />
      </a>
      <div className="doneRecipeInfo">

        <a href={ `http://localhost:3000/meals/${recipe.id}` }>
          <h2>{recipe.name}</h2>
        </a>
        <div>
          <h4>{`${recipe.nationality && `${recipe.nationality} - `} ${recipe.category}`}</h4>
        </div>
        <div>
          <p>{recipe.doneDate}</p>
        </div>
        <div className="tags">
          {recipe.tags.map((tag, indexT) => (
            <span
              key={ indexT }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {indexT + 1 < recipe.tags.length ? `${tag}, ` : tag}

            </span>
          ))}
        </div>
        <div className="shareContainer">
          <ShareButton
            id={ recipe.id }
            testId={ `${index}-horizontal-share-btn` }
            type="meals"
          />
          {copyId && <p>Link copied!</p>}
        </div>
      </div>
    </section>
  );
}

DoneRecipeDrinks.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;

export default DoneRecipeDrinks;
