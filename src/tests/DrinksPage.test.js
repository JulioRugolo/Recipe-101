import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';
import AppProvider from '../context/AppProvider';

const searchTopBtn = 'search-top-btn';
const searchInput = 'search-input';
const execSearchBtn = 'exec-search-btn';

describe('Testa o componente MealsDetails', () => {
  test('testa pagina Meals', async () => {
    renderWithRouter(<AppProvider><App /></AppProvider>, '/drinks');
    const allBtn = screen.getByTestId('All-category-filter');
    userEvent.click(allBtn);
    const drink = await screen.findByTestId('1-recipe-card');
    expect(drink).toBeInTheDocument();
    userEvent.click(drink);
  });
  test('se o alert é emitido', () => {
    renderWithRouter(<AppProvider><App /></AppProvider>, '/drinks');
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioFirstLetter);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'xablau');
    userEvent.click(searchButton);
  });
  test('ao clicar no radio name', () => {
    renderWithRouter(<AppProvider><App /></AppProvider>, '/drinks');
    const radioName = screen.getByText(/nome/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioName);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'kir');
    userEvent.click(searchButton);
  });
});
