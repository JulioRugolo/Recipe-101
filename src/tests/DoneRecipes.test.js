import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';
import userTest from './mocks/user';

describe('Testa a página DoneRecipes', () => {
  test('testa se os componentes estão renderizados', () => {
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

    const buttonGoToDone = screen.getByTestId('gotodone');
    userEvent.click(buttonGoToDone);

    act(() => {
      history.push('/done-recipes');
      expect(history.location.pathname).toBe('/done-recipes');
      const title = screen.getByTestId('title');
      expect(title).toBeInTheDocument();
    });
  });
});
