import React from "react";
import Lottie from "lottie-react";
import "./About.css";
import coffeeimg from "../../assets/Images/Coffee-img.jpg";
import Astronaut from "../../assets/Animations/astronaut-coding.json";

function About({aboutref}) {
  return (
    <section ref={aboutref} className="about-section">
      <div className="about-contents">
        <div className="coffee-img-contents">
          <img src={coffeeimg} className="coffee-img" />
          <div className="white-circle">
            <Lottie className="astronaut-icon" animationData={Astronaut} />
          </div>
        </div>
        <div className="about-text">
          <h2 className="about-heading">ABOUT ME</h2>
          <h2 className="about-start">
            A dedicated full-stack web developer <br /> with expertise in both
            frontend and <br />
            backend technologies.
          </h2>
          <div className="about-body">
            Proficient in the MERN stack, my skill set spans React.js, Node.js,
            HTML, CSS, JavaScript, MongoDB, and MySQL. As a competitive
            programmer, I possess strong problem-solving abilities.
            Additionally, I have a solid foundation in core programming
            languages such as Java, C/C++, and Python. I am well-versed in
            Docker and have experience working in both Windows and Linux
            environments. My diverse expertise makes me a valuable asset for
            your web development projects.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
