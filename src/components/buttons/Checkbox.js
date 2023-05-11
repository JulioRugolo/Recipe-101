import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function Checkbox({ type, id, ingredients, index, name }) {
  const [checked, setChecked] = useState(false);
  const { checkboxes, setCheckboxes } = useContext(AppContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
      drinks: {},
      meals: {},
    };

    if (data[type][id]) {
      const isChecked = data[type][id].some((chec) => chec === index);
      setChecked(isChecked);
    }
  }, [type, id, index]);

  const inputChange = (index2) => {
    const label = document.getElementById(`input-${index2}`);
    const input = document.getElementById(`${index2}-ingredient-step`);
    if (input.checked === false) {
      label.style.textDecoration = 'none';
    } else {
      setCheckboxes([...checkboxes, input.checked]);
      label.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  };

  function handleClick() {
    inputChange(index);
    setChecked(!checked);
    const data = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
      drinks: {},
      meals: {},
    };

    if (!checked && data[type][id]) {
      data[type][id] = [...data[type][id], ingredients];
    } else {
      data[type][id] = [ingredients];
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify(data));
  }

  return (
    <label
      key={ index }
      data-testid={ `${index}-ingredient-step` }
      htmlFor={ `${index}-ingredient-step` }
      id={ `input-${index}` }
    >
      <input
        id={ `${index}-ingredient-step` }
        type="checkbox"
        name={ `${index}-ingredient-step` }
        onChange={ () => handleClick() }
        checked={ checked }
      />
      {name}
    </label>

  );
}

Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;
