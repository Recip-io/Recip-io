import React from 'react';
import $ from 'jquery';


var addRecipe = function(props) {
  event.preventDefault();
  alert(props.recipe.recipeName + " has been added to your collection");
  $.ajax({
    method: 'POST',
    url: '/api/recipios/yummly',
    data: JSON.stringify(props.recipe),
    contentType: 'application/json'
  })
    .done(function(data) {
      console.log('addRecipe posted successfully', data);
      props.componentDidMount();
    })
    .fail(function() {
      console.log('failed to post');
  });
}

const YummlyRecipe = (props) => (
  <li className="recipe-list-entry-yummly" key={props.recipe._id}>
    <div className="recipe">
      <a href={'https://www.yummly.com/recipe/' + props.recipe.id} target="_blank"><span className="recipe-title-yum">{props.recipe.recipeName}</span></a>
      <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
      <img height="90px" src={props.recipe.imageUrlsBySize[90]} className="recipe-image-yummly" />
      <div className="recipe-stats" onClick={() => addRecipe(props)}><span class="glyphicon glyphicon-plus"></span> Add to my recipios</div>
    </div>
  </li>
);

export default YummlyRecipe;