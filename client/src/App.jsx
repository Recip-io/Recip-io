import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

// components
import Submit from './components/Submit.jsx';
import Recipe from './components/Recipe.jsx';
import RecipeList from './components/RecipeList.jsx';
import SearchDB from './components/SearchDB.jsx';
import SearchYummly from './components/SearchYummly.jsx';
import YummlyRecipe from './components/YummlyRecipe.jsx';
import YummlyRecipeList from './components/YummlyRecipeList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'recipeList',
      recipes: [],
      currentRecipe: null,
      username: ''
    }
    this.changeView = this.changeView.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleRecipeTitleOrImageClick = this.handleRecipeTitleOrImageClick.bind(this);
    this.handleDbSearchResults = this.handleDbSearchResults.bind(this);
    this.handleYummlySearchResults = this.handleYummlySearchResults.bind(this);
  }

  componentDidMount() {
    $.get( "/api/recipios", function(data) {
      this.setState({
        recipes: JSON.parse(data)
      })
    }.bind(this));
  }

  handleRecipeTitleOrImageClick(recipe) {
    this.setState({
      view: 'recipe',
      currentRecipe: recipe
    });
  }

  handleDbSearchResults(data) {
    this.setState({
      view: 'recipe',
      currentRecipe: data[0]
    });
  }

  handleYummlySearchResults(data) {
    this.setState({
      view: 'yummlySearchResults',
      recipes: data
    });
  }

  changeView(option) {
    this.setState({
      view: option
    });
    this.componentDidMount();
  }

  handleView() {
    const {view} = this.state;

    if (view === 'recipeList') {
      return <RecipeList recipes={this.state.recipes} handleClick={() => this.changeView('recipeview')}  componentDidMount={this.componentDidMount} handleRecipeTitleOrImageClick={this.handleRecipeTitleOrImageClick} />
    } else if (view === 'recipe') {
      return <Recipe recipe={this.state.currentRecipe}/>
    } else if (view === 'submit') {
      return <div className="search-bar"><Submit username={this.state.username} /></div>
    } else if (view === 'searchdb') {
      return <div className="search-bar"><SearchDB handleDbSearchResults={this.handleDbSearchResults} /></div>
    } else if (view === 'searchyummly') {
      return <div className="search-bar"><SearchYummly handleYummlySearchResults={this.handleYummlySearchResults} /></div>
    } else if (view === 'yummlySearchResults'){
      return <YummlyRecipeList recipes={this.state.recipes} />
    } else {
      return <Recipe />
    }

  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top">
          <span className="logo"
            onClick={() => this.changeView('recipeList')}>
            <img id="logo" src="/images/recipio.svg" alt="logo"></img>
          </span>
          <span className={this.state.view === 'recipeList'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('recipeList')}>
            My Recipios
          </span>
          <span className={this.state.view === 'submit'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('submit')}>
            Create a New Recipio
          </span>
          <span className={this.state.view === 'searchdb'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('searchdb')}>
            Search your Recipios
          </span>
          <span className={this.state.view === 'searchyummly'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('searchyummly')}>
            Search Yummly
          </span>
        </nav>

        <div className="main">
          {this.handleView()}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);