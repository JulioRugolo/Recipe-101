import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <button data-testid="drinks-bottom-btn">
        <img src={ drinkIcon } alt="drinkIcon" />
      </button>
      <button data-testid="meals-bottom-btn">
        <img src={ mealIcon } alt="mealIcon" />
      </button>
    </footer>
  );
}

export default Footer;
