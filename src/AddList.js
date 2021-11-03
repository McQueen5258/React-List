import React, { Component } from "react";

class AddList extends Component {

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

    // Implement the rest of this function here!
    console.log(e)
    this.props.addList(e.target[0].value);  // ? 有没有更好的方法获取from表单的所有值？
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id="addList">
            <label>
              What will be on your next list?&nbsp;
              <input type="text" ref="id" id="newID"></input>
              <input type="text" ref="id" id="newID2"></input>
            </label>
          </div>
          <br />
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

export default AddList;
