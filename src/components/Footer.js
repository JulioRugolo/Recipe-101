import React from 'react';
import PropTypes from 'prop-types';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer(props) {
  const { history } = props;
  return (
    <footer data-testid="footer">
      <button
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('drinks') }
      >
        <img src={ drinkIcon } alt="drinkIcon" />
      </button>
      <button
        src={ mealIcon }
        data-testid="meals-bottom-btn"
        onClick={ () => history.push('meals') }
      >
        <img src={ mealIcon } alt="mealIcon" />
      </button>
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Footer;
