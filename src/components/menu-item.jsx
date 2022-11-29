import React, { Component } from "react";

class MenuItem extends Component {
  state = {};
  render() {
    return (
      <li className="menu-item">
        <h4 className="index">0{this.props.index + 1}</h4>
        <a href="#" className="menu-link">
          <span className="stack-text">{this.props.name}</span>
          <span className="stack-text">{this.props.name}</span>
        </a>
      </li>
    );
  }
}

export default MenuItem;
