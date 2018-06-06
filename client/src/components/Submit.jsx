import React from "react";

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

  handleChange(e) {
    console.log(this.state.recipeName);
    let change = { [e.target.name] : e.target.value };
    console.log(change);
    this.setState(change);
  }

  submitRecipe() {
    console.log('IN submitRecipe');
    $.post('/recipios', this.state)
    .done((data) => {
      console.log('the submit returned ', data);
    });
  }

  render() {
    return (
      <div>
      <div className="search-submit-header">Add a recipe of your own</div>
        <form method="POST">
          <input type="text" placeholder="Give your recipe a title" id="newRecipeName" name="recipeName" value={this.state.recipeName} onChange={this.handleChange}></input>
          <input type="submit" value="Add" onClick={this.submitRecipe}></input>
          <textarea rows="8" placeholder="Enter a description – this can include quantites of ingredients, steps to create or even pairing recommendations!"  id="newRecipeDescription" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
        </form>
      </div>
    );
  }
}

export default Submit;