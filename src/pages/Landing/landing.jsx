import React from "react";
import "./landing.css";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";
import Projects from "../../components/Projects/Projects";

function Landing() {
  return (
    <div className="bigbox">
      <Intro />
      <About />
      <Achievements />
      <Projects />
    </div>
  );
}

export default Landing;
