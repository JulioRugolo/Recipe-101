import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';
import userTest from './mocks/user';
import mealsFilters from './mocks/filterMeals';

// import Recipes from '../pages/Recipes';

const execSearchBtn = 'exec-search-btn';
const searchTopBtn = 'search-top-btn';
const searchInput = 'search-input';
const urlFilters = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

describe('testa pagina meals', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(mealsFilters),
      });
  });
  test('testa pagina Meals', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByTestId('login-submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, userTest.email);
    userEvent.type(passwordInput, userTest.password);
    expect(submitButton.disabled).toBe(false);
    userEvent.click(submitButton);

    act(() => {
      history.push('/meals');
      expect(history.location.pathname).toBe('/meals');
    });
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
    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinksButton).toBeInTheDocument();
    userEvent.click(drinksButton);

    act(() => {
      history.push('/drinks');
      expect(history.location.pathname).toBe('/drinks');
    });
    expect(global.fetch).toBeCalledWith(urlFilters);
  });
  test('ao clicar no radio name', () => {
    const { history } = renderWithRouter(<App />);
    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinksButton).toBeInTheDocument();
    userEvent.click(drinksButton);

    act(() => {
      history.push('/drinks');
      expect(history.location.pathname).toBe('/drinks');
    });
    const radioIngridient = screen.getByText(/Ingrediente/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioIngridient);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'vodka');
    userEvent.click(searchButton);

    const radioName = screen.getByText(/Nome/i);
    userEvent.click(radioName);
    userEvent.click(enableInputButton);
    userEvent.type(inputSearch, 'a');
    userEvent.click(searchButton);
    expect(global.fetch).toBeCalledTimes(16);
  });
  test('ao clicar no radio firstletter', () => {
    renderWithRouter(<App />);
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioFirstLetter);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'c');
    userEvent.click(searchButton);
  });
  test('se o alert é emitido', () => {
    renderWithRouter(<App />);
    const radioFirstLetter = screen.getByText(/primeira letra/i);
    const enableInputButton = screen.getByTestId(searchTopBtn);
    const searchButton = screen.getByTestId(execSearchBtn);
    userEvent.click(radioFirstLetter);
    userEvent.click(enableInputButton);
    const inputSearch = screen.getByTestId(searchInput);
    userEvent.type(inputSearch, 'xablau');
    userEvent.click(searchButton);
    // const globalAlert = 'Your search must have only 1 (one) character';
    window.alert = jest.fn();
    waitFor(() => expect(window.alert).toHaveBeenCalledTimes(1));
  });
});
