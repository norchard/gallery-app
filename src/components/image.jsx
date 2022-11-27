import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img
          className="rounded float-right m-3"
          alt=""
          key={this.props.id}
          src={this.props.url + `?random=${this.props.id}`}
          onClick={() => this.props.onClick(this.props)}
        />
        <span className="tooltip">Click to Change Image</span>
      </React.Fragment>
    );
  }
}

export default Image;
