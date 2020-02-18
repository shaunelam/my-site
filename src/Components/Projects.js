import React from "react";
import "../sass/css/Projects.css";
import { Link } from 'react-scroll';
import BankLogo from "../images/plaid.png";
import SpaceLogo from "../images/space.png";
import upArrow from "../images/arrow-up.png";

const Projects = () => {
  return (
    <div className="Page-Container" id="projects">
    <div className="circle"></div>
      <div className="Project-Container">
        <div className="P1">
          <img src={BankLogo} alt="Bank Logo App" />
          <div className="middle">
            <a href="https://afternoon-ravine-70731.herokuapp.com/" alt="live">
              Live
            </a>
            <a href="https://github.com/shaunelam/mern-plaid" alt="code">
              Code
            </a>
          </div>
        </div>
        <div className="P2">
          <img src={SpaceLogo} alt="Space Logo App" />
          <div className="middle">
            <a href="https://shaunelam.github.io/shaunspaceprogram/" alt="live">
              Live
            </a>
            <a href="https://github.com/shaunelam/shaunspaceprogram" alt="code">
              Code
            </a>
          </div>
        </div>
      </div>
      {/* scrolls to top */}
      <div className="upArrow">
        <Link to="landing" smooth={true} duration={1000}>
            <img src={upArrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
