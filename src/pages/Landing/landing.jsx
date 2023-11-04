import React, {useRef} from "react";
import "./landing.css";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../components/Navbar/Navbar";

function Landing() {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const achievementsref = useRef(null);
  const projectsref = useRef(null);

  return (
    <div>
      <Navbar
        homeref={homeref}
        aboutref={aboutref}
        achievementsref={achievementsref}
        projectsref={projectsref}
      />
      <div className="bigbox">
        <Intro homeref={homeref} />
        <About aboutref={aboutref} />
        <Achievements achievementsref={achievementsref} />
        <Projects projectsref={projectsref} />
      </div>
    </div>
  );
}

export default Landing;
