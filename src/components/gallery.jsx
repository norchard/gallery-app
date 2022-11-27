import React, { Component } from "react";
import Image from "./image";

class Gallery extends Component {
  render() {
    return this.props.images.map((image) => (
      <Image
        key={image.id}
        url={image.url}
        id={image.id}
        onClick={this.props.onClick}
      />
    ));
  }
}

export default Gallery;
