const React = require('react');
const ReactDOM = require('react-dom');

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
          <div className="col-md-6 offset-md-3">
            <p>This is where a search or submit happens</p>
          </div>
        </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
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

ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;