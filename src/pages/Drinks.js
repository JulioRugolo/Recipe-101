import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

function Drinks(props) {
  const { dataApi } = useContext(AppContext);
  const { history } = props;
  const VALIDATE_ARRAY = 12;

  return (
    <>
      <Header />
      <SearchBar />
      <Footer { ...props } />
      {dataApi
        ? dataApi.map((meal, index) => {
          if (dataApi.length === 1) {
            history.push(`/drinks/${dataApi[0].idDrink}`);
          } else if (index < VALIDATE_ARRAY) {
            return (
              <div data-testid={ `${index}-recipe-card` } key={ meal.idDrink }>
                <p data-testid={ `${index}-card-name` }>{meal.strDrink}</p>
                <img
                  src={ meal.strDrinkThumb }
                  width="100px"
                  alt={ meal.strDrink }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            );
          } else {
            // global.alert('Sorry, we haven\'t found any recipes for these filters.');
          }
          return index;
        }) : <p>Carregando...</p>}
    </>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Drinks;
