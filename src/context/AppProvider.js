import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [favoriteOrProfile, setFavoriteOrProfile] = useState(false);
  const [controlInput, setControlInput] = useState('');
  const [dataApi, setDataApi] = useState([]);
  const [url, setUrl] = useState(null);

  const values = useMemo(() => ({
    title,
    setTitle,
    favoriteOrProfile,
    setFavoriteOrProfile,
    controlInput,
    setControlInput,
    dataApi,
    setDataApi,
    url,
    setUrl,
  }), [title, setTitle, favoriteOrProfile,
    setFavoriteOrProfile, controlInput, setControlInput,
    dataApi, setDataApi, url, setUrl]);

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
