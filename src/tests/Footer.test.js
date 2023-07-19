import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from './helpers/renderWithRouter';
import userTest from './mocks/user';
import App from '../App';

describe('Testa o componente footer', () => {
  test('testa o link de comidas e bebidas', () => {
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

    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinksButton).toBeInTheDocument();
    userEvent.click(drinksButton);
    act(() => {
      history.push('/drinks');
      expect(history.location.pathname).toBe('/drinks');
    });

    const mealsButton = screen.getByTestId('meals-bottom-btn');
    expect(mealsButton).toBeInTheDocument();
    userEvent.click(mealsButton);
    act(() => {
      history.push('/meals');
      expect(history.location.pathname).toBe('/meals');
    });
  });
});
