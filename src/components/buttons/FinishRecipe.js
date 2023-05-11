import { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';

function ButtonValidator(numberOfCheckbox) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { checkboxes } = useContext(AppContext);

  useEffect(() => {
    if (checkboxes.length === numberOfCheckbox) {
      setIsDisabled(checkboxes.every((checkbox) => checkbox));
    }
  }, [checkboxes, numberOfCheckbox]);

  return (
    <button
      data-testid="finish-recipe-btn"
      disabled={ isDisabled }
    >
      {' '}
      Finalizar receita
      {' '}

    </button>
  );
}

export default ButtonValidator;
