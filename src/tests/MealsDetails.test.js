import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import AppProvider from '../context/AppProvider';
import { renderWithRouter } from './helpers/renderWithRouter';
import pathFunc from './helpers/pathFunc';

describe('Testa o componente MealsDetails', () => {
  test('testa se os componentes estão renderizados', async () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals/53065');

    const title = await screen.findByRole('heading', { name: /sushi/i });
    expect(title).toBeInTheDocument();

    const drinkImg = await screen.findByRole('img', { name: /a1/i });
    expect(drinkImg).toBeInTheDocument();
  });
});
