import React from 'react';
import $ from 'jquery';


var favPlusOne = function(props) {
  event.preventDefault();
  var recipioId = JSON.stringify({ _id: props.recipe._id });
  console.log('in favPlusOne, recipioId = ', recipioId);
  $.ajax({
    method: 'POST',
    url: '/api/recipios/fav',
    data: recipioId,
    contentType: 'application/json'
  })
    .done(function(data) {
      console.log('favs incremented successfully', data);
      props.componentDidMount();
    })
    .fail(function() {
      console.log('favs failed increment');
  });
}

const Recipe = (props) => (
  <li className="recipe-list-entry" key={props.recipe._id}>
    <div className="recipe">
      <span className="recipe-title" onClick={() => props.handleRecipeTitleOrImageClick(props.recipe)}>{props.recipe.recipeName}</span>
      <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
      <img height="200" src={props.recipe.imageUrl} className="recipe-image" onClick={() => props.handlerecipeTitleOrImageClick(props.recipe)}/>
      <span className="recipe-body">{props.recipe.description.split('\n').map(paragraph => <p>{paragraph}</p>)}</span>
      <div className="recipe-stats" onClick={() => favPlusOne(props)}>{props.recipe.favs} &hearts;</div>
    </div>
  </li>
);

export default Recipe;


// https://www.yummly.com/recipe/