import $ from 'jquery';

export function searchRecipes(stateInSearch, callback) {
  console.log('in searchRecipe, and this.state = ', stateInSearch);
  $.ajax({
    method: 'POST',
    url: '/api/recipios/search',
    data: stateInSearch,
    contentType: 'application/json'
  })
    .then(function(data) {
      callback(JSON.parse(data));
    })
    .fail(function() {
      console.log('search component failed to post');
  });
}