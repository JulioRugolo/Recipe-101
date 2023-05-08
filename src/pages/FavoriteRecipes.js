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
    <>
      <Header />
      <h1 data-testid="title">title</h1>
    </>
  );
}

export default FavoritesRecipes;
