import React from 'react';
import YummlyRecipe from './YummlyRecipe.jsx';

const RecipeList = (props) => (
  <div className="recipe-list">
    <ul>
        {props.recipes.map((recipe) => <YummlyRecipe recipe={recipe} componentDidMount={props.componentDidMount}/>)}
    </ul>
  </div>
);

export default RecipeList;