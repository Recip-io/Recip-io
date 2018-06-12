import React from 'react';
import $ from 'jquery';

var favPlusOne = function(props) {
  var recipioId = JSON.stringify({ _id: props.recipe._id });
  $.ajax({
    method: 'POST',
    url: '/api/recipios/fav',
    data: recipioId,
    contentType: 'application/json'
  })
    .done(function(data) {
      console.log('favs incremented successfully', data);
      props.componentDidMount(); // special method use alternative
    })
    .fail(function() {
      console.log('favs failed increment');
  });
}

var deleteOne = function(props) {
  var shouldDelete = confirm("Permanantly Delete " + props.recipe.recipeName);
  if (shouldDelete) {
    var recipioId = JSON.stringify({ _id: props.recipe._id });
    $.ajax({
      method: 'POST', // DELETE
      url: '/api/recipios/delete', // attach id instead of delete
      data: recipioId,
      contentType: 'application/json'
    })
      .done(function(data) {
        console.log('recipe deleted successfully', data);
        props.componentDidMount();
      })
      .fail(function() {
        console.log('failed to delete');
    });
  }
}

var isYumRecipe = function(props) {
  if (props.recipe.id) {
    return  <li className="recipe-list-entry-yummly" key={props.recipe._id}>
              <div className="recipe">
                <span className="recipe-title-yum"><a href={'https://www.yummly.com/recipe/' + props.recipe.id} target="_blank">{props.recipe.recipeName}</a></span>
                <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
                <img height="90px" src={props.recipe.imageUrl} className="recipe-image-yummly" />
                <div><span className="recipe-stats" onClick={() => favPlusOne(props)}>{props.recipe.favs}   <span className="glyphicon glyphicon-heart"></span></span>     <span className="recipe-stats" onClick={() => deleteOne(props)}>Delete this recipe <span className="glyphicon glyphicon-trash"></span>
                </span>
                </div>
              </div>
            </li>
  } else {
    return  <li className="recipe-list-entry" key={props.recipe._id}>
              <div className="recipe">
                <span className="recipe-title" onClick={() => props.handleRecipeTitleOrImageClick(props.recipe)}>{props.recipe.recipeName}</span>
                <img height="300" src={props.recipe.imageUrl} className="recipe-image" onClick={() => props.handlerecipeTitleOrImageClick(props.recipe)}/>
                <div className="recipe-byline"><span className="recipe-byline-author">{props.recipe.sourceDisplayName}</span></div>
                <span className="recipe-body">{props.recipe.description.split('\n').map(paragraph => <p>{paragraph}</p>)}</span>
                <div><span className="recipe-stats" onClick={() => favPlusOne(props)}>{props.recipe.favs}   <span className="glyphicon glyphicon-heart"></span></span>     <span className="recipe-stats" style={{textAlign: 'right'}} onClick={() => deleteOne(props)}>Delete this recipe <span className="glyphicon glyphicon-trash"></span>
                </span>
                </div>
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