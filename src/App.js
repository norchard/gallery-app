import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/gallery";
import Header from "./components/header";

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
    const toggleButton = document.getElementById("toggle-background");
    if (app.classList.contains("white")) {
      app.classList.remove("white");
      toggleButton.classList.remove("white");
    } else {
      app.classList.add("white");
      toggleButton.classList.add("white");
    }
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

  handleMenuOpen = () => {
    const menu = document.getElementById("menu-body");
    menu.style.display = "block";
    setTimeout(() => {
      menu.style.opacity = 100;
    }, 300);
    window.removeEventListener("scroll");
  };

  handleMenuClose = () => {
    const menu = document.getElementById("menu-body");
    // menu.style.display = "none";

    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  };

  componentDidMount() {
    const links = document.getElementsByTagName("a");
    const menuToggle = document.getElementsByClassName("toggle-menu");
    const menuItem = document.getElementsByClassName("menu-link");
    // console.log(links);
    for (let toggle of menuToggle) {
      toggle.addEventListener("mouseover", this.handleMouseOver);
      toggle.addEventListener("mouseout", this.handleMouseOut);
      // toggle.style.cursor = "pointer";
    }
    for (let item of menuItem) {
      item.addEventListener("mouseover", this.handleMouseOver);
      item.addEventListener("mouseout", this.handleMouseOut);
      // item.style.cursor = "pointer";
    }
    for (let link of links) {
      link.addEventListener("mouseover", this.handleMouseOver);
      link.addEventListener("mouseout", this.handleMouseOut);
    }
  }

  // handleDisappearing = () => {};

  handleScroll = () => {
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const logo = document.getElementById("logo");
      const toggleBackground = document.getElementById("toggle-background");
      const menu = document.getElementById("open-menu");
      if (lastScrollTop < window.scrollY) {
        logo.classList.add("hidden");
        toggleBackground.classList.add("hidden");
        menu.classList.add("hidden");
      } else {
        logo.classList.remove("hidden");
        toggleBackground.classList.remove("hidden");
        menu.classList.remove("hidden");
      }
      lastScrollTop = window.scrollY;

      //   const cta = document.getElementById("cta");
      //   const rect = cta.getBoundingClientRect();
      //   const triggerPoint = window.innerHeight - 100;
      //   if (rect.top < triggerPoint) {
      //     const app = document.getElementsByClassName("App")[0];
      //     if (app.classList.contains("white")) app.classList.remove("white");
      //     else app.classList.add("white");
      //   }
    });
  };

  render() {
    this.handleScroll();

    return (
      <div className="App" onMouseMove={this.handleCursor}>
        <Header
          onToggleBackground={this.toggleBackground}
          onMenuClose={this.handleMenuClose}
          onMenuOpen={this.handleMenuOpen}
        />
        {/* <h5 id="tooltip">
          <span className="badge-pill badge-info">Click to Change Image</span>
        </h5> */}
        <div className="section">
          <h3 className="intro display-3">
            I am a front-end developer who enjoys re-creating work that I admire
          </h3>
        </div>
        <Gallery
          images={this.state.images}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        />
        <footer>
          <div className="row">
            <div className="col-sm">
              <a href="tel:6094680473" className="button">
                +1 (609) 468-0473
              </a>
            </div>
            <div className="col-sm">
              <a
                target="blank"
                href="https://www.google.com/maps/place/Houston,+TX/"
                className="button"
              >
                Houston, Texas
              </a>
            </div>
            <div className="col-sm">
              <a href="mailto:hello@imitationstudio.com" className="button">
                hello@imitationstudio.com
              </a>
            </div>
          </div>
          <p id="copyright">
            2022 Imitation Studio: Inspiration Credit Goes to &nbsp;
            <a
              id="reference"
              target="blank"
              href="https://whiteunicornagency.com/"
            >
              White Unicorn Agency
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
