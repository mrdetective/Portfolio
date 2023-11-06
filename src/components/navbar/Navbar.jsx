import React, {useRef, useState} from "react";
import "./Navbar.css";
import logo from "../../assets/Images/logo.png";
import {AiOutlineMenu} from "react-icons/ai";

function Navbar({homeref, aboutref, achievementsref, projectsref, contactref}) {
  const showNav = useRef();
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  };
  const toggleNav = () => {
    if (showNav.current.style.display === "none") {
      showNav.current.style.display = "block";
    } else {
      showNav.current.style.display = "none";
    }
  };
  return (
    <nav className="navbar">
      <li className="nav-items-left">
        <img src={logo} className="logo-img" />
        <ul className="nav-username">MrDetective.dev</ul>
      </li>
      <div className="hamburger-container">
        <AiOutlineMenu
          className="hamburger-icon"
          size={"20"}
          onClick={toggleNav}
        />
        <li className="nav-items" ref={showNav}>
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
      </div>
    </nav>
  );
}

export default Navbar;
