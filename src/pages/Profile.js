import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function Profile() {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Profile');
    setFavoriteOrProfile(true);
  });
  return (
    <Header />
  );
}

export default Profile;
