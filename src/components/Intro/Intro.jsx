import React from "react";
import {TypeAnimation} from "react-type-animation";
import {Link} from "react-router-dom";
import "./Intro.css";
import mypic from "../../assets/Images/profile-pic.jpeg";
import githubimg from "../../assets/Icons/github.png";
import linkdedinimg from "../../assets/Icons/linkedin.png";
import htmlimg from "../../assets/Icons/html.png";
import cssimg from "../../assets/Icons/css.png";
import reactimg from "../../assets/Icons/react.png";
import nodeimg from "../../assets/Icons/node-js.png";
import jsimg from "../../assets/Icons/js.png";
import javaimg from "../../assets/Icons/java.png";
import pythonimg from "../../assets/Icons/python.png";
import mysqlimg from "../../assets/Icons/mysql.png";
import mongodbimg from "../../assets/Icons/mongodb.png";
import dockerimg from "../../assets/Icons/docker.png";

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="welcome-img">
        <div className="welcome-text">
          <div className="hi-text">Hi there👋🏼,</div>
          <TypeAnimation
            sequence={[
              `I'm a Fullstack Web Developer`,
              1000,
              `I'm a Competitive Programmer`,
              1000,
            ]}
            speed={50}
            style={{
              whiteSpace: "pre-line",
              fontSize: "2rem",
              width: "20rem",
            }}
            repeat={Infinity}
            className="welcome-typed-text"
          />
        </div>
        <div className="intro-text">
          I'm Harsha Gupta, a passionate FullStack Developer
          <br /> based in West Bengal, India 📍
        </div>
        <div className="welcome-icons">
          <Link to="https://github.com/mrdetective" target="_blank">
            <img className="github-icon" src={githubimg} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/harsha-gupta-397314136/"
            target="_blank">
            <img className="linkedin-icon" src={linkdedinimg} />
          </Link>
          <a
            href="https://drive.google.com/file/d/1D_z2Vs_vflJQaI4W_Zg4t3nqs6G6IRE8/view?usp=sharing"
            download="Resume_Harsha_Gupta_ (1).pdf"
            target="_blank">
            <button className="download-resume-btn">Download Resume</button>
          </a>
        </div>
        <div className="tech-stack">
          <div className="tech-stack-text">Tech Stack </div>
          <div className="tech-stack-images">
            <div className="html-css-img">
              <img className="html-img" src={htmlimg} />
              <img className="css-img" src={cssimg} />
            </div>
            <div className="react-node-img">
              <img src={reactimg} className="react-img" />
              <img src={nodeimg} className="node-img" />
            </div>
            <div className="core-language-img">
              <img src={jsimg} className="javascript-img" />
              <img src={javaimg} className="java-img" />
              <img src={pythonimg} className="python-img" />
            </div>
            <div className="db-language">
              <img src={mysqlimg} className="mysql-img" />
              <img src={mongodbimg} className="mongodb-img" />
            </div>
            <div className="tools">
              <img src={dockerimg} className="docker-img" />
            </div>
          </div>
        </div>
      </div>
      <img className="mypic" src={mypic} />
    </section>
  );
}

export default Intro;
