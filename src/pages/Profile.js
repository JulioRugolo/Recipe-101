import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import Footer from '../Components/Footer';

function Profile(props) {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Profile');
    setFavoriteOrProfile(true);
  });
  const { history } = props;
  const email = localStorage.getItem('user');

  return (
    <>
      <Header />
      <h2 data-testid="profile-email">{ email }</h2>
      <button
        data-testid="profile-done-btn"
        onClick={ () => {
          history.push('/done-recipes');
        } }
      >
        Done Recipes

      </button>
      <button
        data-testid="profile-favorite-btn"
        onClick={ () => {
          history.push('/favorite-recipes');
        } }
      >
        Favorite Recipes

      </button>
      <button
        data-testid="profile-logout-btn"
        onClick={ () => {
          history.push('/');
          localStorage.clear();
        } }
      >
        Logout

      </button>
      <Footer />
    </>
  );
}

export default Profile;

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
