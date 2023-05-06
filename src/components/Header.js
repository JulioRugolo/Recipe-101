import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import AppContext from '../context/AppContext';
import './style.css';

function Header() {
  const { title, favoriteOrProfile } = useContext(AppContext);
  const history = useHistory();
  const [inputSearch, setInputSearch] = useState(false);
  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <div>
        <button
          src={ profileIcon }
          data-testid="profile-top-btn"
          onClick={ () => {
            history.push('/profile');
          } }
        >
          <img src={ profileIcon } alt="search" />
        </button>
        {
          favoriteOrProfile === false && (
            <button
              src={ searchIcon }
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
          inputSearch && <input data-testid="search-input" type="text" />
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
