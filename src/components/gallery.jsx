import React, { Component } from "react";
import Image from "./image";

class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.images.map((image) => (
          <Image
            key={image.id}
            url={image.url}
            id={image.id}
            onClick={this.props.onClick}
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Gallery;
