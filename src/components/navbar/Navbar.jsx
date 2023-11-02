import React from "react";
import "./Navbar.css";
import logo from "../../assets/Images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <li className="nav-items-left">
        <img src={logo} className="logo-img" />
        <ul className="nav-username">MrDetective.dev</ul>
      </li>
      <li className="nav-items">
        <ul className="nav-intro">
          <a href="#home">Home</a>
        </ul>
        <ul className="nav-about">
          <a href="#about">About</a>
        </ul>
        <ul className="nav-achievements">
          <a href="#achievements">Achievements</a>
        </ul>
        <ul className="nav-projects">Projects</ul>
      </li>
    </nav>
  );
}

export default Navbar;
