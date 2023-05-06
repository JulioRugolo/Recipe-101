import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';

function Drinks() {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle('Drinks');
  });
  return (
    <>
      <Header />
      <SearchBar />
    </>
  );
}

export default Drinks;
