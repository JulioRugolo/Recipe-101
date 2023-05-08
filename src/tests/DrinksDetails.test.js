import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import DrinkDetails from '../components/DrinkDetails';

describe('Testa o componente MealsDetails', () => {
  test('testa se os componentes estão renderizados', () => {
    renderWithRouter(<DrinkDetails />);
    const title = screen.getByTestId('detail-title');
    expect(title).toBeInTheDocument();
  });
});
