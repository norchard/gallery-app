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
    const circle = document.getElementById("circle");
    circle.classList = "hover";
    // console.log("mousing over");
    // const tooltip = document.getElementById("tooltip");
    // tooltip.style.visibility = "visible";
  };

  handleMouseOut = () => {
    const cursor = document.getElementById("cursor");
    const circle = document.getElementById("circle");

    cursor.classList = "";
    circle.classList = "";

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
    const circle = document.getElementById("circle");
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      // circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      cursor.style.left = `${x + 5}px`;
      cursor.style.top = `${y + 5}px`;
      // cursor.style.transition = "transform 1s ease-in";
      setTimeout(() => {
        circle.style.left = `${x - 20.5}px`;
        circle.style.top = `${y - 20.5}px`;
      }, "20");
    });
  };

  toggleBackground = () => {
    const app = document.getElementsByClassName("App")[0];
    if (app.classList.contains("white")) app.classList.remove("white");
    else app.classList.add("white");
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

  componentDidMount() {
    const buttons = document.getElementsByClassName("button");
    console.log(buttons);
    for (let button of buttons) {
      button.addEventListener("mouseover", this.handleMouseOver);
      button.addEventListener("mouseout", this.handleMouseOut);
    }
  }

  render() {
    // window.addEventListener("scroll", () => {
    //   const cta = document.getElementById("cta");
    //   const rect = cta.getBoundingClientRect();
    //   const triggerPoint = window.innerHeight - 100;
    //   if (rect.top < triggerPoint) {
    //     const app = document.getElementsByClassName("App")[0];
    //     if (app.classList.contains("white")) app.classList.remove("white");
    //     else app.classList.add("white");
    //   }
    // });

    return (
      <div className="App" onMouseMove={this.handleCursor}>
        <span id="cursor"></span>
        <span id="circle"></span>
        <h1 className="display-1">Gallery</h1>
        {/* <h5 id="tooltip">
          <span className="badge-pill badge-info">Click to Change Image</span>
        </h5> */}
        <Gallery
          images={this.state.images}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        />
        <a onClick={this.toggleBackground} class="button gradient">
          Toggle Background
        </a>
        <div id="cta" className="section">
          <h1 className="display-1">Tell Me About You</h1>
        </div>
        <footer>
          <div class="row">
            <div class="col-sm">
              <a href="tel6094680473" class="button">
                +1 (609) 468-0473
              </a>
            </div>
            <div class="col-sm">
              <a
                href="https://www.google.com/maps/place/Houston,+TX/"
                class="button"
              >
                Houston, Texas
              </a>
            </div>
            <div class="col-sm">
              <a href="mailto:hello@immitationagency.com" class="button">
                hello@immitationagency.com
              </a>
            </div>
          </div>
          <p id="copyright">
            2022 Immitation Agency: Credit Goes to Unicorn Agency
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
