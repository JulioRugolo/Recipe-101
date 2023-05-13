import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import DoneRecipePage from '../pages/DoneRecipePage';
import AppProvider from '../context/AppProvider';

describe('Testa a página DoneRecipes', () => {
  test('testa se os componentes estão renderizados', () => {
    renderWithRouter(<AppProvider><DoneRecipePage /></AppProvider>);

    const mealsBtn = screen.getByRole('button', { name: /meals/i });
    expect(mealsBtn).toBeInTheDocument();

    const profileBtn = screen.getByRole('img', { name: /search/i });
    expect(profileBtn).toBeInTheDocument();

    const doneTitle = screen.getByRole('heading', { name: /done recipes/i });
    expect(doneTitle);
  });
});
