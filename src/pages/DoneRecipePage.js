import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import DoneRecipes from '../components/DoneRecipes';

function DoneRecipePage() {
  const { setTitle, setFavoriteOrProfile } = useContext(AppContext);
  useEffect(() => {
    setTitle('Done Recipes');
    setFavoriteOrProfile(true);
  });
  return (
    <>
      <Header />
      <h1 data-testid="title">title</h1>
      <DoneRecipes />
    </>
  );
}

export default DoneRecipePage;
