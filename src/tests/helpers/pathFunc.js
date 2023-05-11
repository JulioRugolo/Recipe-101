import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import userTest from '../mocks/user';

const pathFunc = (history, path) => {
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
    history.push(path);
    expect(history.location.pathname).toBe(path);
  });
};

export default pathFunc;
