import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  var activeStyle = {
    color: "#fff",
    fontWeight: "bold"
  };

  var navStyle = {
    color: "#20beff",
    //fontSize: "110%",
    marginLeft: "7.5%"
  };
  return (
    <NavLink style={navStyle} activeStyle={activeStyle} exact to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;
