import React from "react";

class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="search-submit-header">Add a recipe of your own</div>
        <form method="POST">
          <input type="text" placeholder="What is Your Recipe Called?"></input>
          <input type="submit" value="Add"></input>
          <textarea rows="8" placeholder="Enter a description – this can include quantites of ingredients, steps to create or even pairing recommendations!"></textarea>
        </form>
      </div>
    );
  }
}

export default Submit;