import React from 'react';
import Recipe from './Recipe.jsx';

const RecipeList = (props) => (
  <div className="recipe-list">
    <ul>
        {props.recipes.map((recipe) => <Recipe recipe={recipe} handleRecipeTitleOrImageClick={props.handleRecipeTitleOrImageClick} componentDidMount={props.componentDidMount}/>)}
    </ul>
  </div>
);

export default RecipeList;