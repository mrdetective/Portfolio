import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <li className="nav-items-left">
        <ul className="nav-username">MrDetective.dev</ul>
      </li>
      <li className="nav-items">
        <ul className="nav-intro">About</ul>
        <ul className="nav-achievements">Achievements</ul>
        <ul className="nav-projects">Projects</ul>
      </li>
    </nav>
  );
}

export default Navbar;
