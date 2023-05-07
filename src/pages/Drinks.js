import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';

function Drinks(props) {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle('Drinks');
  });
  return (
    <>
      <Header />
      <SearchBar />
      <Footer { ...props } />
    </>
  );
}

export default Drinks;
