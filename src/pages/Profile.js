import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import './profile.css';

function Profile(props) {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Profile');
    setFavoriteOrProfile(true);
  });
  const { history } = props;
  const email = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header />
      <section className="backgroundContainer">
        <main className="profileContainer">
          <h2 data-testid="profile-email">
            { email?.email }
          </h2>
        </main>
        <div className="buttonContainer">
          <button
            className="btn btn-warning"
            data-testid="profile-done-btn"
            onClick={ () => {
              history.push('/done-recipes');
            } }
          >
            Done Recipes

          </button>
          <button
            className="btn btn-warning"
            data-testid="profile-favorite-btn"
            onClick={ () => {
              history.push('/favorite-recipes');
            } }
          >
            Favorite Recipes

          </button>
          <button
            className="btn btn-warning"
            data-testid="profile-logout-btn"
            onClick={ () => {
              history.push('/');
              localStorage.clear();
            } }
          >
            Logout

          </button>
        </div>
      </section>

      <Footer { ...props } />
    </>
  );
}

export default Profile;

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
