import React from "react";
import NavTab from "./navTab.js";

const NavBar = () => {

  var barStyle = {
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
    background: "#636569",
    marginBottom: "3%",
    width:"100%",
  };

  return (
    <div style={barStyle}>
      <b style={{marginRight:"10%", fontSize:"140%", color:"#fff", marginLeft:"10%"}}>Ivan Horokhovskyi</b>
        <NavTab to="/" label="Me" />
      <NavTab to="/projects" label="Projects" />
        <NavTab to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;
