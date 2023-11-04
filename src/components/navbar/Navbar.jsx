import React from "react";
import "./Navbar.css";
import logo from "../../assets/Images/logo.png";

function Navbar({homeref, aboutref, achievementsref, projectsref, contactref}) {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  };
  return (
    <nav className="navbar">
      <li className="nav-items-left">
        <img src={logo} className="logo-img" />
        <ul className="nav-username">MrDetective.dev</ul>
      </li>
      <li className="nav-items">
        <ul
          className="nav-intro"
          onClick={() => {
            scrollTo(homeref);
          }}>
          Home
        </ul>
        <ul
          className="nav-about"
          onClick={() => {
            scrollTo(aboutref);
          }}>
          About
        </ul>
        <ul
          className="nav-achievements"
          onClick={() => {
            scrollTo(achievementsref);
          }}>
          Achievements
        </ul>
        <ul
          className="nav-projects"
          onClick={() => {
            scrollTo(projectsref);
          }}>
          Projects
        </ul>
        <ul
          className="nav-contact"
          onClick={() => {
            scrollTo(contactref);
          }}>
          Contact me
        </ul>
      </li>
    </nav>
  );
}

export default Navbar;
