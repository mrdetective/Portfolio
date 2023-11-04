import React, {useRef} from "react";
import "./landing.css";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";

function Landing() {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const achievementsref = useRef(null);
  const projectsref = useRef(null);
  const contactref = useRef(null);

  return (
    <div>
      <Navbar
        homeref={homeref}
        aboutref={aboutref}
        achievementsref={achievementsref}
        projectsref={projectsref}
        contactref={contactref}
      />
      <div className="bigbox">
        <Intro homeref={homeref} />
        <About aboutref={aboutref} />
        <Achievements achievementsref={achievementsref} />
        <Projects projectsref={projectsref} />
        <Contact contactref={contactref} />
      </div>
    </div>
  );
}

export default Landing;
