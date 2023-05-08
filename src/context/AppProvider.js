import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('Meals');
  const [favoriteOrProfile, setFavoriteOrProfile] = useState(false);
  const [controlInput, setControlInput] = useState('');
  const [url, setUrl] = useState(title === 'Meals' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    if (url !== null) {
      const fetchApi = async () => {
        const response = await fetch(url);
        const apiData = await response.json();
        const returnData = title === 'Meals' ? apiData.meals : apiData.drinks;
        setDataApi(returnData);
      };
      fetchApi();
    }
  }, [url, title]);

  const values = useMemo(() => ({
    title,
    setTitle,
    favoriteOrProfile,
    setFavoriteOrProfile,
    controlInput,
    setControlInput,
    dataApi,
    setDataApi,
    setUrl,
  }), [title, setTitle, favoriteOrProfile,
    setFavoriteOrProfile, controlInput, setControlInput,
    dataApi, setDataApi, setUrl]);

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
