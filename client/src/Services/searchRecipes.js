import $ from 'jquery';

export function searchRecipes(searchTerm, callback) {
  $.ajax({
    method: 'POST',
    url: '/api/recipios/search',
    data: searchTerm,
    contentType: 'application/json'
  })
    .then(function(data) {
      callback(JSON.parse(data));
    })
    .fail(function() {
      console.log('search component failed to post');
  });
}


// axios.post('/api/recipios/search', searchTerm)
//   .then(function(data) {
//     callback(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });