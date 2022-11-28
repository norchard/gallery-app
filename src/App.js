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
    const cursor = document.getElementById("cursor");
    cursor.classList = "hover";
    // console.log("mousing over");
    // const tooltip = document.getElementById("tooltip");
    // tooltip.style.visibility = "visible";
  };

  handleMouseOut = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList = "";
    // const tooltip = document.getElementById("tooltip");
    // tooltip.style.visibility = "hidden";
  };

  handleClick = (image) => {
    const { url, id } = image;
    const images = [...this.state.images];
    images[id] = {
      id: id,
      url: `${url.split("=")[0]}=${Date.now()}`,
    };
    this.setState({ images });
  };

  handleCursor = () => {
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });
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
    return (
      <div className="App" onMouseMove={this.handleCursor}>
        <span id="cursor">
          <span id="pin"></span>
        </span>
        <h1 className="display-1">Gallery</h1>
        <h5 id="tooltip">
          <span className="badge badge-info">Click to Change Image</span>
        </h5>
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
