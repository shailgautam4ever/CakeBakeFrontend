import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { name: "Home", path: "/" },
        { name: "For Party", path: "/forParty" },
        { name: "Birthday Cakes", path: "/birthdayCake" },
        { name: "By Flavor", path: "/byFlavor" },
        { name: "Cart", path: "/cart" },
        { name: "Add Cake", path: "/addNewCake" },
      ],
    };
  }
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-left">
          <i className="fas fa-birthday-cake"></i>
          <span>Cake Bake..</span>
        </div>
        <div className="nav-right">
          {this.state.navItems.map((item, index) => (
            // <li key={index} className={index == 0 ? "nav-item-active" : ""}>
            //
            // </li>
            <NavLink to={item.path} exact activeClassName='nav-item-active'>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default Nav;
