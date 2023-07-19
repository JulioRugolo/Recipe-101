import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';
import userTest from './mocks/user';

describe('Testa a página DoneRecipes', () => {
  const profileTestId = 'profile-top-btn';
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

    const buttonProfile = screen.getByTestId(profileTestId);
    userEvent.click(buttonProfile);

    act(() => {
      history.push('/profile');
      expect(history.location.pathname).toBe('/profile');
    });

    const emailProfile = screen.getByTestId('profile-email');
    expect(emailProfile).toBeInTheDocument();

    const favoritesButton = screen.getByTestId('profile-favorite-btn');
    expect(favoritesButton).toBeInTheDocument();
    userEvent.click(favoritesButton);

    act(() => {
      history.push('/favorite-recipes');
      expect(history.location.pathname).toBe('/favorite-recipes');
    });

    expect(screen.getByTestId(profileTestId)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(profileTestId));

    act(() => {
      history.push('/profile');
      expect(history.location.pathname).toBe('/profile');
    });

    const doneRecipes = screen.getByTestId('profile-done-btn');
    expect(doneRecipes).toBeInTheDocument();
    userEvent.click(doneRecipes);

    act(() => {
      history.push('/done-recipes');
      expect(history.location.pathname).toBe('/done-recipes');
    });

    expect(screen.getByTestId(profileTestId)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(profileTestId));

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();
    userEvent.click(logoutBtn);

    act(() => {
      history.push('/');
      expect(history.location.pathname).toBe('/');
    });

    waitFor(() => {
      expect(localStorage.getItem('user')).toBeUndefined();
    });
  });
});
