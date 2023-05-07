import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';

function DoneRecipes() {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Done Recipes');
    setFavoriteOrProfile(true);
  });
  return (
    <Header />
  );
}

export default DoneRecipes;
