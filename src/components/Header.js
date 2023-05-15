import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import AppContext from '../context/AppContext';
import './header.css';
import SearchBar from './SearchBar';

function Header() {
  const { title, favoriteOrProfile, controlInput,
    setControlInput } = useContext(AppContext);
  const history = useHistory();
  const [inputSearch, setInputSearch] = useState(false);
  return (
    <header>
      <div className="title">
        <h1 data-testid="page-title">{ title }</h1>
        <button
          src={ profileIcon }
          data-testid="profile-top-btn"
          onClick={ () => {
            history.push('/profile');
          } }
        >
          <img src={ profileIcon } alt="search" />
        </button>
      </div>
      <div className="search">
        <div className="searchInput">
          {
            favoriteOrProfile === false && (
              <button
                src={ searchIcon }
                className="searchSvg"
                data-testid="search-top-btn"
                onClick={ () => {
                  setInputSearch(!inputSearch);
                } }
              >
                <img src={ searchIcon } alt="search" />
              </button>
            )
          }
          {
            inputSearch && <input
              name="controlInput"
              value={ controlInput }
              className="inputType"
              onChange={ ({ target }) => setControlInput(target.value) }
              data-testid="search-input"
              type="text"
            />
          }
          {inputSearch && <SearchBar /> }
        </div>

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
