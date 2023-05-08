import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';
import AppContext from '../context/AppContext';

function Footer(props) {
  const { history } = props;
  const { setTitle } = useContext(AppContext);
  return (
    <footer data-testid="footer">
      <button
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        onClick={ () => {
          history.push('drinks');
          setTitle('Drinks');
        } }
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
