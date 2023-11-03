import React from "react";
import "./Projects.css";
import devnestimg from "../../assets/Images/DevNest.jpg";
import github from "../../assets/Icons/github2.png";
import {Link} from "react-router-dom";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-content">
        <div className="projects-heading">PROJECTS</div>
        <div className="projects-start">
          Projects are like a puzzle, each piece must fit perfectly for the
          picture to become clear 🧩
        </div>
        <div className="Projects">
          <div className="project-1">
            <div className="project-1-contents">
              <img className="devnest-img" src={devnestimg} />
              <div className="project-1-text">
                <div className="project-1-heading">DevNest(October, 2023)</div>
                <div className="project-1-body">
                  DevNest is a web-based coding platform that allows you to
                  compile code directly in your browser. It supports more than
                  40 programming languages ​​and offers a choice of more than 50
                  themes. Additionally, users have the convenience of saving
                  their coding files to their own account.
                </div>
                <Link
                  to="https://github.com/mrdetective/DevNest"
                  target="_blank">
                  <img className="github-img" src={github}></img>
                </Link>
              </div>
            </div>
          </div>
          <div className="project-1">
            <div className="project-1-contents">
              <div className="project-1-text">
                <div className="project-1-heading">DevNest(October, 2023)</div>
                <div className="project-1-body">
                  DevNest is a web-based coding platform that allows you to
                  compile code directly in your browser. It supports more than
                  40 programming languages ​​and offers a choice of more than 50
                  themes. Additionally, users have the convenience of saving
                  their coding files to their own account.
                </div>
                <Link
                  to="https://github.com/mrdetective/DevNest"
                  target="_blank">
                  <img className="github-img" src={github}></img>
                </Link>
              </div>
              <img className="devnest-img right" src={devnestimg} />
            </div>
          </div>
          <div className="project-1">
            <div className="project-1-contents">
              <img className="devnest-img" src={devnestimg} />
              <div className="project-1-text">
                <div className="project-1-heading">DevNest(October, 2023)</div>
                <div className="project-1-body">
                  DevNest is a web-based coding platform that allows you to
                  compile code directly in your browser. It supports more than
                  40 programming languages ​​and offers a choice of more than 50
                  themes. Additionally, users have the convenience of saving
                  their coding files to their own account.
                </div>
                <Link
                  to="https://github.com/mrdetective/DevNest"
                  target="_blank">
                  <img className="github-img" src={github}></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
