import React from 'react';
import PropTypes from 'prop-types';

function FilterComponent(props) {
  const { strCategory } = props;
  return (
    <button
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </button>

  );
}

FilterComponent.propTypes = {
  strCategory: PropTypes.string.isRequired,
};

export default FilterComponent;
