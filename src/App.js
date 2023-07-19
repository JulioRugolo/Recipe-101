import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipePage from './pages/DoneRecipePage';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetails from './components/RecipeDetails';
import RecipeInProgress from './components/RecipeInProgress';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route
          exact
          path="/meals"
          component={ Recipes }
        />
        <Route
          exact
          path="/meals/:id"
          component={ RecipeDetails }
        />
        <Route
          exact
          path="/drinks/:id"
          component={ RecipeDetails }
        />
        <Route
          exact
          path="/drinks"
          component={ Drinks }
        />
        <Route
          exact
          path="/profile"
          component={ Profile }
        />
        <Route
          exact
          path="/done-recipes"
          component={ DoneRecipePage }
        />
        <Route
          exact
          path="/favorite-recipes"
          component={ FavoriteRecipes }
        />
        <Route
          exact
          path="/meals/:id/in-progress"
          component={ RecipeInProgress }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ RecipeInProgress }
        />
      </Switch>
    </AppProvider>
  );
}

export default App;
