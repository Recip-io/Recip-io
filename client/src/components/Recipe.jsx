import React from 'react';


var favIncrementer = function(props) {
  var blogId = props.recipe._id;
  $.patch( "/api/recipios/' + blogId'");
}

const Recipe = (props) => (
  <li className="recipe-list-entry" key={props.recipe._id} onChange={() => favIncrementer(props)}>
    <div className="recipe">
      <h1 className="recipe-title" onClick={() => props.handleRecipeTitleOrImageClick(props.recipe)}>{props.recipe.recipeName}</h1>
      <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span> </div>
      <img src={props.recipe.imageUrl} className="recipe-image" onClick={() => props.handlerecipeTitleOrImageClick(props.recipe)}/>
      <span className="recipe-body">{props.recipe.description.split('\n').map(paragraph => <p>{paragraph}</p>)}</span>
      <div className="recipe-stats">{props.recipe.favs} &hearts;</div>
    </div>
  </li>
);

export default Recipe;


// https://www.yummly.com/recipe/