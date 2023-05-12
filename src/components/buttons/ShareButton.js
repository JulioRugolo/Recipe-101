import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import AppContext from '../../context/AppContext';

const copy = require('clipboard-copy');

function ShareButton(props) {
  const { id, testId, type } = props;
  const { setCopyId } = useContext(AppContext);
  const location = useLocation();
  const mealsPage = location.pathname.split('/')[1];

  const handleShare = (event) => {
    event.preventDefault();
    setCopyId(id);
    copy(`http://localhost:3000/${type || mealsPage}/${id}`);
  };
  return (
    <button
      data-testid={ testId || 'share-btn' }
      onClick={ (event) => handleShare(event) }
      className={ testId || 'shareRecipe' }
      src={ shareIcon }
    >
      <img src={ shareIcon } alt="share" />
    </button>
  );
}

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ShareButton;
