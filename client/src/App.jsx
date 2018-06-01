import React from "react";
import ReactDOM from "react-dom";
import Jquery from "jquery";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
        <div className="row">
          <div className="search-bar col-md-6 offset-md-3">
            <p>This is where a search or submit happens</p>
          </div>
        </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <h1>A recip<span id="iotextarea">io</span> h1 heading</h1>
            <h2>A recipio h2 heading</h2>
            <h3>A recipio h3 heading</h3>
            <h4>A recipio h4 heading</h4>
            <h5>A recipio h5 heading</h5>
            <h6>A recipio h6 heading</h6>
            <p>An area to display recipes</p>
          </div>
          <div className="col-md-5">
            <p>This is a place for a list of recipes</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
