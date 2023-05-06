import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';
import userTest from './mocks/user';

// import Recipes from '../pages/Recipes';

const execSearchBtn = 'exec-search-btn';
const searchTopBtn = 'search-top-btn';
const searchInput = 'search-input';

describe('testa pagina meals', () => {
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
  });
  test('ao clicar no radio name', () => {
    renderWithRouter(<App />);
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
