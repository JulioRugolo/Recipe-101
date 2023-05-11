import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function ButtonValidator(props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { checkboxes } = useContext(AppContext);
  const { numberOfCheckbox, history } = props;

  useEffect(() => {
    const areAllCheckboxesChecked = () => checkboxes.length === numberOfCheckbox
  && checkboxes.every((checkbox) => checkbox === true);
    setIsDisabled(!areAllCheckboxesChecked());
  }, [checkboxes, numberOfCheckbox]);

  return (
    <button
      data-testid="finish-recipe-btn"
      disabled={ isDisabled }
      onClick={ () => { history.push('/done-recipes'); } }
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
