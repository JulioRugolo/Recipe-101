import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [favoriteOrProfile, setFavoriteOrProfile] = useState(false);
  const [controlInput, setControlInput] = useState('');
  const [dataApi, setDataApi] = useState([]);

  const values = useMemo(() => ({
    title,
    setTitle,
    favoriteOrProfile,
    setFavoriteOrProfile,
    controlInput,
    setControlInput,
    dataApi,
    setDataApi,
  }), [title, setTitle, favoriteOrProfile,
    setFavoriteOrProfile, controlInput, setControlInput,
    dataApi, setDataApi]);

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
