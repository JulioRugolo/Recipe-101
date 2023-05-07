import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';

function Recipes(props) {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle('Meals');
  });
  return (
    <>
      <Header />
      <SearchBar />
      <Footer { ...props } />
    </>
  );
}

export default Recipes;
