import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import shareIcon from '../../images/shareIcon.svg';
import AppContext from '../../context/AppContext';

const copy = require('clipboard-copy');

function ShareButton(props) {
  const { id, testId } = props;
  const { setCopyId } = useContext(AppContext);
  const location = useLocation();
  const mealsPage = location.pathname.split('/')[1];

  const handleShare = (event) => {
    event.preventDefault();
    setCopyId(id);
    copy(`http://localhost:3000/${mealsPage}/${id}`);
  };
  return (
    <button
      data-testid={ testId || 'share-btn' }
      className="shareRecipe"
      onClick={ (event) => handleShare(event) }
    >
      <img src={ shareIcon } alt="share" />
    </button>
  );
}

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default ShareButton;
