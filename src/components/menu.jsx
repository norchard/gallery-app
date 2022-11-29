import React, { Component } from "react";
import MenuItem from "./menu-item";

class Menu extends Component {
  state = {
    menuItems: ["One", "Two", "Three", "Four"],
  };
  render() {
    return (
      <div>
        <div
          onClick={this.props.onOpen}
          id="open-menu"
          className="toggle-menu"
        ></div>
        <div id="menu-body">
          <h4 id="name">
            Imitation <span>Studio</span>
          </h4>
          <div className="row">
            {" "}
            <div className="col-6">
              <img
                style={{ paddingTop: "200px" }}
                src="https://picsum.photos/600?random=3"
              />
            </div>
            <div className="col-6">
              {" "}
              <ul id="menu-list" className="display-1">
                {this.state.menuItems.map((item, i) => {
                  return <MenuItem key={i} name={item} index={i} />;
                })}
              </ul>
            </div>
          </div>
          <div
            onClick={this.props.onClose}
            id="close-menu"
            className="toggle-menu"
          ></div>
        </div>
      </div>
    );
  }
}

export default Menu;
