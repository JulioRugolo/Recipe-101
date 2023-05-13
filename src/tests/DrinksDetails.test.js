import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import AppProvider from '../context/AppProvider';
import App from '../App';
import pathFunc from './helpers/pathFunc';

describe('Testa o componente DrinksDetails', () => {
  test('testa se os componentes estão renderizados', async () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/drinks/17222/');
    const title = await screen.findByTestId('recipe-title');
    expect(title).toBeInTheDocument();

    const drinksImg = await screen.findByRole('img', { name: /corba/i });
    expect(drinksImg).toBeInTheDocument();
  });
});
