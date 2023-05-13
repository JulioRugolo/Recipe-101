import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';
import userTest from './mocks/user';
import DoneRecipePage from '../pages/DoneRecipePage';
import AppProvider from '../context/AppProvider';
import oneMeal from '../../cypress/mocks/oneMeal';
import meals from '../../cypress/mocks/meals';
import DoneRecipeMeals from '../components/DoneRecipeMeals';

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
