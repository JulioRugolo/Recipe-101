import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './helpers/renderWithRouter';
import AppProvider from '../context/AppProvider';
import App from '../App';
import pathFunc from './helpers/pathFunc';

describe('Testa o componente MealInProgress', () => {
  test('testa se os componentes estão renderizados', async () => {
    const srcImg = 'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg';
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/meals/52781/in-progress/');
    const img = await screen.findByTestId('recipe-photo');
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(srcImg);

    const checkbox0 = await screen.findByRole('checkbox', {
      name: /whole wheat/i,
    });
    expect(checkbox0).toBeInTheDocument();
    userEvent.click(checkbox0);
    expect(checkbox0).toBeChecked();
  });
});

describe('Testa o componente DrinkInProgress', () => {
  test('testa se os componentes estão renderizados', async () => {
    const srcImg = 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg';
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);
    pathFunc(history, '/drinks/14229/in-progress');
    const img = await screen.findByTestId('recipe-photo');
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(srcImg);

    const checkbox0 = await screen.findByRole('checkbox', {
      name: /Kahlua/i,
    });
    expect(checkbox0).toBeInTheDocument();
    userEvent.click(checkbox0);
    expect(checkbox0).toBeChecked();
  });
});
