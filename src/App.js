import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/gallery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: this.generateImages(12),
    };
  }

  handleMouseOver = () => {
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "inline";
    tooltip.style.position = "absolute";
    tooltip.classList = "badge badge-info";
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      tooltip.style.left = `${x + 10}px`;
      tooltip.style.top = `${y + 10}px`;
    });
  };

  handleMouseOut = () => {
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  };

  handleClick = (image) => {
    const { url, id } = image;
    console.log(url, id);
    const images = [...this.state.images];
    images[id] = {
      id: id,
      url: `https://picsum.photos/300?random=${Date.now()}`,
    };
    this.setState({ images });
  };

  generateImages = (size) => {
    const images = [];
    for (var i = 0; i < size; i++) {
      images.push({
        id: i,
        url: `https://picsum.photos/300?random=${Date.now()}`,
      });
    }
    return images;
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="display-1">Gallery</h1>
        <Gallery
          images={this.state.images}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        />
      </div>
    );
  }
}

export default App;
