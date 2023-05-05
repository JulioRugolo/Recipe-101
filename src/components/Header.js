import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <button data-testid="profile-top-btn">
        <img src={ profileIcon } alt="profile" />
      </button>
      <button>
        <img src={ searchIcon } alt="search" />
      </button>
    </header>
  );
}

export default Header;
