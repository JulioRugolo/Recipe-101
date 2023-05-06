import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import AppContext from '../Context/AppContext';

function Header() {
  const { title, favoriteOrProfile } = useContext(AppContext);

  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <button data-testid="profile-top-btn">
        <img src={ profileIcon } alt="profile" />
      </button>
      {
        !favoriteOrProfile && (
          <button data-testid="search-top-btn">
            <img src={ searchIcon } alt="search" />
          </button>
        )
      }
    </header>
  );
}

/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  iconSearch: PropTypes.bool.isRequired,
  iconProfile: PropTypes.bool.isRequired,
}; */

export default Header;
