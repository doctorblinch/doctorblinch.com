import React from "react";
import NavTab from "./navTab.js";

const NavBar = () => {

  let barStyle = {
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
    background: "#636569",
    marginBottom: "3%",
    //width:"100vw",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  };

  let labelStyle = {
    marginRight:"40%",
    fontSize:"140%",
    color:"#fff",
    marginLeft:"10%"
  };

  return (
    <div style={barStyle}>
      <b style={labelStyle}>Ivan Horokhovskyi</b>
      <div>
        <NavTab to="/" label="Me" />
        <NavTab to="/projects" label="Projects" />
        <NavTab to="/contact" label="Contact" />
      </div>
    </div>
  );
};

export default NavBar;
