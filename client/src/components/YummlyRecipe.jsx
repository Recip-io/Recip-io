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

const YummlyRecipe = (props) => (
  <li className="recipe-list-entry-yummly" key={props.recipe._id}>
    <div className="recipe">
      <a href={'https://www.yummly.com/recipe/' + props.recipe.id} target="_blank"><span className="recipe-title">{props.recipe.recipeName}</span></a>
      <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
      <img height="90px" src={props.recipe.imageUrlsBySize[90]} className="recipe-image-yummly" />
      <div className="recipe-stats"><span>&#43;</span> Add to my recipios</div>
    </div>
  </li>
);

export default YummlyRecipe;


// https://www.yummly.com/recipe/
// onClick={() => props.handlerecipeTitleOrImageClick(props.recipe)}