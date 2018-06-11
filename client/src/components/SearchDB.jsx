import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';
import RecipeList from './RecipeList.jsx';
import {searchRecipes} from '../Services/searchRecipes.js'

class SearchDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sourceDisplayName: '',
        ingredients: [],
        recipeName: '',
        description: ''
    };
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.state.recipeName);
    let change = { [event.target.name] : event.target.value };
    console.log('this changed ', change);
    this.setState(change);
  }

  handleSearch(event) {
    event.preventDefault();
    searchRecipes(JSON.stringify(this.state), (data) => {
      this.props.handleDbSearchResults(data);
    })
  }

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
