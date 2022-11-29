import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <div className="project-tile m-3">
        <div className="image-container">
          <img
            alt=""
            key={this.props.id}
            src={this.props.url + `?random=${this.props.id}`}
            onClick={() => this.props.onClick(this.props)}
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
          />
        </div>
        <h3 className="image-title">Title</h3>
      </div>
    );
  }
}

export default Image;
