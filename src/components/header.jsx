import React, { Component } from "react";
import Logo from "./logo";
import Menu from "./menu.jsx";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <span id="cursor"></span>
        <span id="circle"></span>
        <Menu onOpen={this.props.onMenuOpen} onClose={this.props.onMenuClose} />
        <Logo />
        <a
          id="toggle-background"
          onClick={this.props.onToggleBackground}
          className="button gradient"
        >
          <div id="toggle-icon"></div>
        </a>
      </header>
    );
  }
}

export default Header;
