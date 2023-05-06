import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function Recipes() {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle('Meals');
  });
  return (
    <Header />
  );
}

export default Recipes;
