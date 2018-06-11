import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';
import RecipeList from './RecipeList.jsx';

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
    // this.setState = this.setState.bind(this);
    // this.passResult = this.passResult.bind(this);
  }

  handleChange(event) {
    console.log(this.state.recipeName);
    let change = { [event.target.name] : event.target.value };
    console.log('this changed ', change);
    this.setState(change);
  }

  searchYummly(stateInSearch, callback) {
    // event.preventDefault();
    $.get('https://api.yummly.com/v1/api/recipes', {
      _app_id: '8b8cd9e8',
      _app_key: 'ef204733e01609824a9281627c32fee0',
      q: stateInSearch,
      requirePictures: true,
      maxResult: 10,
    })
    .done(function(data) {
      console.log('this is the yummly result ', data.matches);
      callback(data.matches);
      // if (callback) {
      //   callback(items);
      // }
    })
    .fail(function() {
        console.log('yummly component failed to search');
    });
  }

  handleSearch(event) {
    // console.log('handleSearch props', this.props);
    event.preventDefault();
    this.searchYummly(this.state.recipeName, (data) => {
            // this.handleResult(data);
      // this.setState({
      //   searchResult: data
      // })

      //     console.log('in handle props', this.props);
      // console.log('data in handle = ', JSON.parse(data));
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

// window.searchYummly = searchYummly;

export default SearchYummly;

    // <form method="POST" onSubmit={}>
    //   <input type="text" placeholder="Search Yummly" id="searchyummly" name="recipeName" value={} onChange={}></input>
    // </form>