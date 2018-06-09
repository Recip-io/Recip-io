import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

// components
import Submit from './components/Submit.jsx';
import Recipe from './components/Recipe.jsx';
import RecipeList from './components/RecipeList.jsx';
import SearchDB from './components/SearchDB.jsx';
import SearchYummly from './components/searchYummly.jsx';

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

  componentDidUpdate() {
    console.log(this.state.recipes);
  }



  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'recipeList') {
      return <RecipeList recipes={this.state.recipes} handleClick={() => this.changeView('recipeview')} handleRecipeTitleOrImageClick={this.handleRecipeTitleOrImageClick} />
    } else if (view === 'recipe') {
      return <Recipe recipe={this.state.currentRecipe}/>
    } else if (view === 'submit') {
      return <div className="search-bar"><Submit username={this.state.username} /></div>
    } else if (view === 'searchdb') {
      return <SearchDB />
    } else if (view === 'searchyummly') {
      return <SearchYummly />
    } else {
      return <Recipe />
    }

  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
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
            Search for Recipios
          </span>
          <span className={this.state.view === 'searchyummly'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('searchyummly')}>
            Search Yummly
          </span>
        </nav>

        <div className="main">
          {this.renderView()}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



        // <div className="row">
        //   <div className="search-bar col-md-6 offset-md-3">
        //     <Submit username={this.state.username} />
        //   </div>
        //   <div>
        //     <RecipeList recipes={this.state.recipes} handleClick={() => this.changeView('recipeview')} handleRecipeTitleOrImageClick={this.handleRecipeTitleOrImageClick} />
        //   </div>
        // </div>
        // <div className="row">
        //   <div className="col-md-7">
        //     <h1>A recip<span id="iotextarea">io</span> h1 heading</h1>
        //     <h2>A recipio h2 heading</h2>
        //     <h3>A recipio h3 heading</h3>
        //     <h4>A recipio h4 heading</h4>
        //     <h5>A recipio h5 heading</h5>
        //     <h6>A recipio h6 heading</h6>
        //     <p>An area to display recipes</p>
        //   </div>
        //   <div className="col-md-5">
        //     <p>This is a place for a list of recipes</p>
        //   </div>
        // </div>