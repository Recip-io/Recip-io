import React from "react";
import $ from "jquery";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      sourceDisplayName: this.props.username,
      ingredients: [],
      recipeName: '',
      totalTimeInSeconds: 0,
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
  }

  handleChange(event) {
    console.log(this.state.recipeName);
    let change = { [event.target.name] : event.target.value };
    console.log(change);
    this.setState(change);
  }

  submitRecipe(event) {
    event.preventDefault();
    console.log('in submitRecipe, and this.state = ', this.state);
    $.ajax({
      method: 'POST',
      url: '/api/recipios',
      data: JSON.stringify(this.state),
      contentType: 'application/json'
    })
      .done(function(data) {
        console.log('submit component posted successfully', data);
      })
      .fail(function() {
        console.log('submit component failed to post');
    });
  }

  render() {
    return (
      <div>
      <div className="search-submit-header">Add a recipe of your own</div>
        <form method="POST" onSubmit={this.submitRecipe}>
          <input type="text" placeholder="Give your recipe a title" id="newRecipeName" name="recipeName" value={this.state.recipeName} onChange={this.handleChange}></input>
          <input type="submit" value="Add"></input>
          <textarea rows="8" placeholder="Enter a description – this can include quantites of ingredients, steps to create or even pairing recommendations!"  id="newRecipeDescription" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
        </form>
      </div>
    );
  }
}

export default Submit;