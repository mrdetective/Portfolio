import React from "react";
import "./landing.css";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";

function Landing() {
  return (
    <div className="bigbox">
      <Intro />
      <About />
      <Achievements />
    </div>
  );
}

export default Landing;
