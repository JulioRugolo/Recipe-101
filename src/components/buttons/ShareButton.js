import React from 'react';
import Swal from 'sweetalert2';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton() {
  const handleShare = (event) => {
    event.preventDefault();
    console.log(window.location.href);
    copy(window.location.href);
    Swal.fire('link copiado!');
  };
  return (
    <button
      data-testid="share-btn"
      onClick={ (event) => handleShare(event) }
      className="shareRecipe"
    >
      <img src={ shareIcon } alt="share" />
    </button>
  );
}

export default ShareButton;
