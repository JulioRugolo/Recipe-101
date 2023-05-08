import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [favoriteOrProfile, setFavoriteOrProfile] = useState(false);
  const [controlInput, setControlInput] = useState('');
  const [urlMeals, setUrlMeals] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [urlDrinks, setUrlDrinks] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const [dataMeals, setDataMeals] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(urlMeals);
      const apiData = await response.json();
      setDataMeals(apiData.meals);
    };

    const fetchDrinks = async () => {
      const response = await fetch(urlDrinks);
      const apiData = await response.json();
      setDataDrinks(apiData.drinks);
    };
    fetchMeals();
    fetchDrinks();
  }, [urlMeals, urlDrinks]);

  const values = useMemo(() => ({
    title,
    setTitle,
    favoriteOrProfile,
    setFavoriteOrProfile,
    controlInput,
    setControlInput,
    dataMeals,
    dataDrinks,
    setUrlMeals,
    urlMeals,
    setUrlDrinks,
    urlDrinks,
  }), [
    title,
    setTitle,
    favoriteOrProfile,
    setFavoriteOrProfile,
    controlInput,
    setControlInput,
    dataMeals,
    dataDrinks,
    setUrlMeals,
    urlMeals,
    setUrlDrinks,
    urlDrinks,
  ]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppProvider;
