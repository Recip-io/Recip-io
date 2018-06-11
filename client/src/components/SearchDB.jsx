import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';
import RecipeList from './RecipeList.jsx';
import {searchRecipes} from '../Services/searchRecipes.js'


// var searchRes = [];

class SearchDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchResult: null,
      // searchParams: {
        sourceDisplayName: '',
        ingredients: [],
        recipeName: '',
        description: ''
      // }
    };
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
    // this.searchRecipes = this.searchRecipes.bind(this);
    // this.setState = this.setState.bind(this);
    // this.passResult = this.passResult.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  handleChange(event) {
    console.log(this.state.recipeName);
    let change = { [event.target.name] : event.target.value };
    console.log('this changed ', change);
    this.setState(change);
  }

  // searchRecipes(event, callback) {
  //   event.preventDefault();
  //   console.log('in searchRecipe, and this.state = ', this.state);
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/recipios/search',
  //     data: JSON.stringify(this.state),
  //     contentType: 'application/json'
  //   })
  //     .then(function(data) {
  //       callback(data);
  //       // console.log('this.props = ', this.props);
  //       // let searchRes = JSON.parse(data);
  //       // callback(JSON.parse(data));
  //       // this.props.handleDbSearchResults(searchRes);
  //       // $( ".searchdb" ).insertAfter( "<RecipeList recipes={JSON.parse(data)} handleClick={() => this.changeView('recipeview')}  componentDidMount={this.componentDidMount} handleRecipeTitleOrImageClick={this.handleRecipeTitleOrImageClick} />" );
  //       // console.log('search component posted successfully', JSON.parse(data));
  //     })
  //     .fail(function() {
  //       console.log('search component failed to post');
  //   }.bind(this));
  //   // this.passResult(searchRes);
  //   // console.log('this.state.result = ', this.state.result);
  //   // console.log(props.handleDbSearchResults, searchRes);
  // }

  // passResult(props, searchRes) {
  //   props.handleDbSearchResults(searchRes);
  // }

  // renderResult() {
  //   const {recipeName} = this.state;
  // }

  handleSearch(event) {
    // console.log('handleSearch props', this.props);
    event.preventDefault();
    searchRecipes(JSON.stringify(this.state), (data) => {
            // this.handleResult(data);
      // this.setState({
      //   searchResult: data
      // })

      //     console.log('in handle props', this.props);
      // console.log('data in handle = ', JSON.parse(data));
      this.props.handleDbSearchResults(data);
    })
  }

  handleResult(data) {
    console.log('handleResult', data, this.props, this.state)
      //     this.setState({
      //   searchResult: data
      // })
  }


          // <form method="POST" onSubmit={this.searchRecipes(this.props, this.props.handleDbSearchResults())}>

  render() {
    return (
      <React.Fragment>
        <div id="searchdb">
          <div className="search-submit-header">What are you looking for?</div>
          <form onSubmit={this.handleSearch.bind(this)}>
            <input type="text" placeholder="Title" id="recipeName" name="recipeName" value={this.state.recipeName} onChange={this.handleChange}></input>
            <input type="submit" value="Search"></input>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchDB;


        // <div className="main">
          // {this.renderResult()}
        // </div>
        // <RecipeList recipes={this.state.result} handleClick={() => this.changeView('recipeview')}  componentDidMount={this.componentDidMount} handleRecipeTitleOrImageClick={this.handleRecipeTitleOrImageClick} />

          // <textarea rows="12" placeholder="Search recipe instructions"  id="newRecipeDescription" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
          // <input type="text" placeholder="By ingredient" id="newRecipeIngredients" name="ingredients" value={this.state.ingredients} onChange={this.handleChange}></input>
          // <input type="text" placeholder="Author or source" id="newRecipesourceDisplayName" name="sourceDisplayName" value={this.state.sourceDisplayName} onChange={this.handleChange}></input>