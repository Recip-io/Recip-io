import $ from 'jquery';

export function searchRecipes(stateInSearch, callback) {
  // event.preventDefault();
  console.log('in searchRecipe, and this.state = ', stateInSearch);
  $.ajax({
    method: 'POST',
    url: '/api/recipios/search',
    data: stateInSearch,
    contentType: 'application/json'
  })
    .then(function(data) {

      // console.log('searchRecipes data = ', JSON.parse(data));
      callback(JSON.parse(data));
      // let searchRes = JSON.parse(data);
      // callback(JSON.parse(data));
      // this.props.handleDbSearchResults(searchRes);
      // $( ".searchdb" ).insertAfter( "<RecipeList recipes={JSON.parse(data)} handleClick={() => this.changeView('recipeview')}  componentDidMount={this.componentDidMount} handleRecipeTitleOrImageClick={this.handleRecipeTitleOrImageClick} />" );
      // console.log('search component posted successfully', JSON.parse(data));
    })
    .fail(function() {
      console.log('search component failed to post');
  });
  // this.passResult(searchRes);
  // console.log('this.state.result = ', this.state.result);
  // console.log(props.handleDbSearchResults, searchRes);
}