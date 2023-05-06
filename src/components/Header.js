import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import AppContext from '../context/AppContext';
import './style.css';

function Header() {
  const { title, favoriteOrProfile } = useContext(AppContext);

  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <div>
        <button src={ profileIcon } data-testid="profile-top-btn">
          <img src={ profileIcon } alt="search" />
        </button>
        {
          favoriteOrProfile === false && (
            <button src={ searchIcon } data-testid="search-top-btn">
              <img src={ searchIcon } alt="search" />
            </button>
          )
        }
      </div>
    </header>
  );
}

/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  iconSearch: PropTypes.bool.isRequired,
  iconProfile: PropTypes.bool.isRequired,
}; */

export default Header;
