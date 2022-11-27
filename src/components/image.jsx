import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <img
        className="rounded m-3"
        alt=""
        key={this.props.id}
        src={this.props.url + `?random=${this.props.id}`}
        onClick={() => this.props.onClick(this.props)}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
      />
    );
  }
}

export default Image;
