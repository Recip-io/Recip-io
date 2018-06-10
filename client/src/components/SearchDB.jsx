import React from 'react';
import $ from 'jquery';

class SearchDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceDisplayName: '',
      ingredients: [],
      recipeName: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
  }

  handleChange(event) {
    console.log(this.state.recipeName);
    let change = { [event.target.name] : event.target.value };
    console.log(change);
    this.setState(change);
  }

  searchRecipes(event) {
    event.preventDefault();
    console.log('in searchRecipe, and this.state = ', this.state);
    $.ajax({
      method: 'POST',
      url: '/api/recipios/search',
      data: JSON.stringify(this.state),
      contentType: 'application/json'
    })
      .done(function(data) {
        console.log('search component posted successfully', data);
      })
      .fail(function() {
        console.log('search component failed to post');
    });
  }

  render() {
    return (
      <div>
        <div className="search-submit-header">What are you looking for?</div>
        <form method="POST" onSubmit={this.searchRecipes}>
          <input type="text" placeholder="Title" id="newRecipeName" name="recipeName" value={this.state.recipeName} onChange={this.handleChange}></input>
          <input type="submit" value="Search"></input>
          <textarea rows="12" placeholder="Search recipe instructions"  id="newRecipeDescription" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
          <input type="text" placeholder="By ingredient" id="newRecipeIngredients" name="ingredients" value={this.state.ingredients} onChange={this.handleChange}></input>
          <input type="text" placeholder="Author or source" id="newRecipesourceDisplayName" name="sourceDisplayName" value={this.state.sourceDisplayName} onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }
}

export default SearchDB;