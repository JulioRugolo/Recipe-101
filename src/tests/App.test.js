import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import userTest from './mocks/user';
import { renderWithRouter } from './helpers/renderWithRouter';
// import Recipes from '../pages/Recipes';
import pathFunc from './helpers/pathFunc';
import AppProvider from '../context/AppProvider';

const emailTestId = 'email-input';
const passTestId = 'password-input';
const loginTestId = 'login-submit-btn';

describe('Testa a página Login', () => {
  test('Testa se o botão começa desabilitado e fica habilitado após preencher o form', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId(emailTestId);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByTestId(passTestId);
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByTestId(loginTestId);
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
  });
  test('testa o component header na pagina meals', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(emailTestId);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByTestId(passTestId);
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByTestId(loginTestId);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, userTest.email);
    userEvent.type(passwordInput, userTest.password);
    expect(submitButton.disabled).toBe(false);
    userEvent.click(submitButton);
    const profileButton = screen.getByTestId('profile-top-btn');
    const searchButton = screen.getByTestId('search-top-btn');
    expect(profileButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  test('testa se ao clicar no botão de search, o input search é renderizado na tela', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(emailTestId);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByTestId(passTestId);
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByTestId('login-submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, userTest.email);
    userEvent.type(passwordInput, userTest.password);
    expect(submitButton.disabled).toBe(false);
    userEvent.click(submitButton);
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
  test('testa se ao clicar no botão de profile, a pagina Profile é renderizada', () => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals');
    const profileButton = screen.getByTestId('profile-top-btn');
    userEvent.click(profileButton);
    act(() => {
      history.push('/profile');
      expect(history.location.pathname).toBe('/profile');
    });
  });
});
