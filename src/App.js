import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import MealsDetails from './Components/MealsDetails';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
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
            component={ MealsDetails }
          />
          <Route
            exact
            path="/drinks/:id"
            component={ MealsDetails }
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
            component={ DoneRecipes }
          />
          <Route
            exact
            path="/favorite-recipes"
            component={ FavoriteRecipes }
          />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
