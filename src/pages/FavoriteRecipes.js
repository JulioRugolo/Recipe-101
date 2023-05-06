import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function FavoritesRecipes() {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Favorite Recipes');
    setFavoriteOrProfile(true);
  });
  return (
    <Header />
  );
}

export default FavoritesRecipes;
