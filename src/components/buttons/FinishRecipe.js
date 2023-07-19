import { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import date from 'date-and-time';
import AppContext from '../../context/AppContext';

function ButtonValidator(props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { checkboxes } = useContext(AppContext);
  const { numberOfCheckbox, recipe } = props;
  const history = useHistory();
  const DONE_RECIPES = 'doneRecipes';
  const location = useLocation();
  const mealsPage = location.pathname.split('/')[1];
  const retrieveLocal = JSON.parse(localStorage.getItem(DONE_RECIPES));

  useEffect(() => {
    const areAllCheckboxesChecked = () => checkboxes.length === numberOfCheckbox
  && checkboxes.every((checkbox) => checkbox === true);
    setIsDisabled(!areAllCheckboxesChecked());
  }, [checkboxes, numberOfCheckbox]);

  const handleClick = () => {
    const dateNow = new Date();
    const pattern = date.compile('ddd, MMM DD YYYY');
    const time = date.format(dateNow, pattern);
    const recipeToSave = {
      id: mealsPage === 'meals' ? recipe.idMeal : recipe.idDrink,
      nationality: recipe.strArea === undefined ? '' : recipe.strArea,
      name: mealsPage === 'meals' ? recipe.strMeal : recipe.strDrink,
      category: mealsPage === 'meals' ? recipe.strCategory : recipe.strCategory,
      image: mealsPage === 'meals' ? recipe.strMealThumb : recipe.strDrinkThumb,
      tags: recipe.strTags === null ? [] : recipe.strTags.split(','),
      alcoholicOrNot: mealsPage === 'drinks' ? 'Alcoholic' : '',
      type: mealsPage === 'meals' ? 'meal' : 'drink',
      doneDate: time,
    };

    if (retrieveLocal) {
      localStorage.setItem(
        DONE_RECIPES,
        JSON.stringify([...retrieveLocal, recipeToSave]),
      );
    } else {
      localStorage.setItem(
        DONE_RECIPES,
        JSON.stringify([recipeToSave]),
      );
    }
    history.push('/done-recipes');
  };

  return (
    <button
      data-testid="finish-recipe-btn"
      disabled={ isDisabled }
      onClick={ () => handleClick() }
    >
      Finalizar receita
    </button>
  );
}

ButtonValidator.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default ButtonValidator;
