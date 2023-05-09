import React from 'react';
// import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import MealsDetails from '../components/RecipeDetails';

describe('Testa o componente MealsDetails', () => {
  test('testa se os componentes estão renderizados', () => {
    renderWithRouter(<MealsDetails />);
  });
});
