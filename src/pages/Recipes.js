import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';

function Recipes() {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle('Meals');
  });
  return (
    <>
      <Header />
      <SearchBar />
    </>
  );
}

export default Recipes;
