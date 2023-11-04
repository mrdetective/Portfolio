import React from "react";
import "./Projects.css";
import devnestimg from "../../assets/Images/DevNest.jpg";
import chessyimg from "../../assets/Images/chessy.png";
import movierecoimg from "../../assets/Images/MovieReco.png";
import github from "../../assets/Icons/github2.png";
import {Link} from "react-router-dom";

function Projects({projectsref}) {
  return (
    <section className="projects-section" ref={projectsref}>
      <div className="projects-content">
        <div className="projects-heading">PROJECTS</div>
        <div className="projects-start">
          Projects are like a puzzle, each piece must fit perfectly for the
          picture to become clear 🧩
        </div>
        <div className="Projects">
          <div className="project">
            <div className="project-contents">
              <img className="devnest-img" src={devnestimg} />
              <div className="project-text">
                <div className="project-heading">DevNest(October, 2023)</div>
                <div className="project-body">
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
          <div className="project">
            <div className="project-contents">
              <div className="project-text">
                <div className="project-heading">Chessy(August, 2023)</div>
                <div className="project-body">
                  Chessy, a chess website featuring multiplayer support via
                  socket.io, integrated WebRTC video conferencing for player
                  interaction, and included Stockfish chess engine for solo play
                </div>
                <Link
                  to="https://github.com/mrdetective/Chessy"
                  target="_blank">
                  <img className="github-img" src={github}></img>
                </Link>
              </div>
              <img className="devnest-img right" src={chessyimg} />
            </div>
          </div>
          <div className="project">
            <div className="project-contents">
              <img className="devnest-img left" src={movierecoimg} />
              <div className="project-text">
                <div className="project-heading">MovieReco(June, 2023)</div>
                <div className="project-body">
                  MovieReco is movie recommendation project hosted on GitHub. It
                  leverages the power of Chat GPT and the OMDB database to
                  provide personalized movie suggestions based on user-input
                  genres.
                </div>
                <Link
                  to="https://github.com/mrdetective/MovieReco"
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
