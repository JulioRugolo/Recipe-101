import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function Drinks() {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle('Drinks');
  });
  return (
    <Header />
  );
}

export default Drinks;
