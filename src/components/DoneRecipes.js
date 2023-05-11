import React, { useContext } from 'react';
import DoneRecipeDrinks from './DoneRecipeDrinks';
import DoneRecipeMeals from './DoneRecipeMeals';
import DoneRecipesButton from './buttons/DoneRecipesButton';
import AppContext from '../context/AppContext';

function DoneRecipes() {
  // const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const { recipeDone } = useContext(AppContext);
  // const test = [{ type: '' }];
  return (
    <div>
      <DoneRecipesButton />
      {
        recipeDone === 'All'
        && (
          <>
            <DoneRecipeDrinks />
            <DoneRecipeMeals />
          </>)
      }
      {recipeDone === 'Drinks' && <DoneRecipeDrinks />}

      { recipeDone === 'Meals' && <DoneRecipeMeals /> }
      {/* {test.map((recipe, index) => {
        if (recipe.type === 'meals') {
          return (<DoneRecipeMeals key={ index } />);
        } if (recipe.type === 'drinks') {
          return <DoneRecipeDrinks key={ index } />;
        }
        return (
          <div key={ index }>
            <DoneRecipeDrinks />
            <DoneRecipeMeals />
          </div>
        );
      })} */}
    </div>
  );
}

export default DoneRecipes;
