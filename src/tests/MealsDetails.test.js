import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import MealsDetails from '../components/MealsDetails';

describe('Testa o componente MealsDetails', () => {
  test('testa se os componentes estão renderizados', () => {
    renderWithRouter(<MealsDetails />);
    const title = screen.getByTestId('detail-title');
    expect(title).toBeInTheDocument();
  });
});
