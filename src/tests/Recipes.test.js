import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';
import mealsFilters from './mocks/filterMeals';
import pathFunc from './helpers/pathFunc';
import AppProvider from '../context/AppProvider';

// import Recipes from '../pages/Recipes';

const execSearchBtn = 'exec-search-btn';
const searchTopBtn = 'search-top-btn';
const searchInput = 'search-input';
const urlFilters = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

describe('testa pagina meals', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(mealsFilters),
      });
  });
  test('testa pagina Meals', () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const radioIngredient = screen.getByText(/ingrediente/i);
    const radioName = screen.getByText(/nome/i);
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    const searchButton = screen.getByTestId(execSearchBtn);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    expect(radioIngredient).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioFirstLetter).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.click(radioIngredient);
    userEvent.type(inputSearch, 'chicken');
    userEvent.click(searchButton);
    expect(global.fetch).toBeCalledWith(urlFilters);
  });
  test('ao clicar no radio name', () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const radioName = screen.getByText(/nome/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioName);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'soup');
    userEvent.click(searchButton);
  });
  test('ao clicar no radio firstletter', () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioFirstLetter);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'c');
    userEvent.click(searchButton);
    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  });
  test('se o alert é emitido', async () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals/');
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioFirstLetter);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'xablau');
    userEvent.click(searchButton);
    const beefFilter = await screen.findByTestId('Beef-category-filter');
    expect(beefFilter).toBeInTheDocument();
    userEvent.click(beefFilter);
    const newFirstItem = await screen.findByTestId('0-card-name');
    expect(newFirstItem).toBeInTheDocument();

    const allFilter = await screen.findByTestId('All-category-filter');
    userEvent.click(allFilter);
    const newNewFirstItem = await screen.findByTestId('0-card-name');
    expect(newNewFirstItem).toBeInTheDocument();

    window.alert = jest.fn();
    waitFor(() => expect(window.alert).toHaveBeenCalledTimes(1));
  });
  test('testa se quando tiver apenas uma receita ja será aberta a págian de detalhes', async () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    userEvent.click(radioFirstLetter);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'i');
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(searchButton);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52781');
    });
  });
  test('testa se o botão Done Recipes é funcional', async () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const doneBtn = screen.getByTestId('gotodone');
    userEvent.click(doneBtn);
    expect(history.location.pathname).toBe('/done-recipes');
  });
  test('', async () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const categoryBtn = await screen.findByRole('button', { name: /beef/i });
    userEvent.click(categoryBtn);
    const pieMeal = screen.getByTestId('0-recipe-card');
    expect(pieMeal).toBeInTheDocument();
  });
});
