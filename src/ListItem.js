import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  }

  handleClick() {
    // Implement this function!
  }

  render() {
    var item = this.props.item;
    // var name = item.name; // ? 不知道为什么会有name属性

    return (
      <span
        onClick={this.handleClick.bind(this)}
        style={{ color: this.state.color }}
      >
        <strong>{item}</strong>
      </span>
    );
  }
}
export default ListItem;
