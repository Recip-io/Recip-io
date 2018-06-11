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

var isYumRecipe = function(props) {
  if (props.recipe.id) {
    return  <li className="recipe-list-entry-yummly" key={props.recipe._id}>
              <div className="recipe">
                <a href={'https://www.yummly.com/recipe/' + props.recipe.id} target="_blank"><span className="recipe-title">{props.recipe.recipeName}</span></a>
                <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
                <img height="90px" src={props.recipe.imageUrl} className="recipe-image-yummly" />
                <div className="recipe-stats" onClick={() => favPlusOne(props)}>{props.recipe.favs} &hearts;</div>
              </div>
            </li>
  } else {
    return  <li className="recipe-list-entry" key={props.recipe._id}>
              <div className="recipe">
                <span className="recipe-title" onClick={() => props.handleRecipeTitleOrImageClick(props.recipe)}>{props.recipe.recipeName}</span>
                <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
                <img height="200" src={props.recipe.imageUrl} className="recipe-image" onClick={() => props.handlerecipeTitleOrImageClick(props.recipe)}/>
                <span className="recipe-body">{props.recipe.description.split('\n').map(paragraph => <p>{paragraph}</p>)}</span>
                <div className="recipe-stats" onClick={() => favPlusOne(props)}>{props.recipe.favs} &hearts;</div>
              </div>
            </li>
  }
}

const Recipe = (props) => (
  <React.Fragment>
    {isYumRecipe(props)}
  </React.Fragment>
);

export default Recipe;


// https://www.yummly.com/recipe/