import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';
import RecipeList from './RecipeList.jsx';
const YummlyApiKeys = require('./config.js');

class SearchYummly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceDisplayName: '',
      ingredients: [],
      recipeName: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchYummly = this.searchYummly.bind(this);
  }

  handleChange(event) {
    let change = { [event.target.name] : event.target.value };
    this.setState(change);
  }

  searchYummly(searchTerm, callback) {
    $.get('https://api.yummly.com/v1/api/recipes', {
      _app_id: YummlyApiKeys.ID,
      _app_key: YummlyApiKeys.Key,
      q: searchTerm,
      requirePictures: true,
      maxResult: 10,
    })
    .done(function(data) {
      callback(data.matches);
    })
    .fail(function() {
        console.log('yummly component failed to search');
    });
  }

  handleSearch(event) {
    event.preventDefault();
    this.searchYummly(this.state.recipeName, (data) => {
      this.props.handleYummlySearchResults(data);
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="searchdb">
          <div className="search-submit-header">Find new recipes!<img id="yum-logo" src="/images/yummly.svg" alt="logo"></img></div>
          <form onSubmit={this.handleSearch.bind(this)}>
            <input type="text" placeholder="Title" id="recipeName" name="recipeName" value={this.state.recipeName} onChange={this.handleChange}></input>
            <input type="submit" value="Search"></input>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchYummly;