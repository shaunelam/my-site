import React, { useRef, useEffect } from "react";
import "../sass/css/Landing.css";
import { TweenMax, Power3 } from "gsap";
import Gitphoto from "../images/github-11-64.png";
import Instaphoto from "../images/instagram-64.png";
import Inphoto from "../images/linkedin-6-64.png";
import Arrow from "../images/arrow-206-64.png";
import Self from "../images/self.jpg";
import { Link } from "react-scroll";

const Landing = () => {
  //Saving html elements in variables to manipulate
  let linkGit = useRef("null");
  let linkInsta = useRef("null");
  let linkIn = useRef("null");
  let page = useRef("null");
  let nameTitle = useRef("null");
  let para = useRef("null");
  let projects = useRef("null");
  let arrow = useRef("null");

  //Gsap for animation
  useEffect(() => {
    TweenMax.to(page, 0, { css: { visibility: "visible" } });
    TweenMax.from(linkGit, 2, {
      opacity: 0,
      x: -200,
      ease: Power3.easeOut
    });
    TweenMax.from(linkInsta, 2, {
      opacity: 0,
      y: 200,
      ease: Power3.easeOut
    });
    TweenMax.from(linkIn, 2, {
      opacity: 0,
      x: 200,
      ease: Power3.easeOut
    });
    TweenMax.from(nameTitle, 2, {
      opacity: 0,
      y: -200,
      ease: Power3.easeOut
    });
    TweenMax.from(para, 2, {
      opacity: 0,
      x: 200,
      ease: Power3.easeOut
    });
    TweenMax.from(projects, 2, {
      opacity: 0,
      y: 200,
      ease: Power3.easeOut
    });
    TweenMax.from(arrow, 2, {
      opacity: 0,
      y: 200,
      ease: Power3.easeOut
    });
  }, []);

  return (
    <div>
      <div
        className="mainContainer"
        ref={el => {
          page = el;
        }}
        id="landing"
      >
        <div className="left-container">
          <div
            className="nameTitle"
            ref={el => {
              nameTitle = el;
            }}
          >
            Shaun Elam
          </div>
          <div className="Links">
            <div
              className="Link git"
              ref={el => {
                linkGit = el;
              }}
            >
              <a
                href="https://github.com/shaunelam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gitphoto} alt="gitphoto" />
              </a>
            </div>
            <div
              className="Link In"
              ref={el => {
                linkInsta = el;
              }}
            >
              <a
                href="https://www.instagram.com/psoelam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instaphoto} alt="instaphoto" />
              </a>
            </div>
            <div
              className="Link insta"
              ref={el => {
                linkIn = el;
              }}
            >
              <a
                href="https://www.linkedin.com/in/shaun-elam-16a66029/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Inphoto} alt="inphoto" />
              </a>
            </div>
          </div>
          <div
            className="project-container"
            ref={el => {
              projects = el;
            }}
          >
            <h3>Projects</h3>
          </div>
          <div className="project-arrow">
            <div
              className="arrow-container"
              ref={el => {
                arrow = el;
              }}
            >
              <Link to="projects" smooth={true} duration={1000}>
                <img src={Arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="selfImage">
            <img src={Self} alt="self" />
          </div>
          <div className="bioText">
            <h1>About Me</h1>
            <p
              ref={el => {
                para = el;
              }}
            >
              I'm based in Anaheim CA, learned to code at the end of high school
              and fell in love with the unlimited possibilities that there are
              with the ability to know how to problem-solve and have the mindset
              to continue self-teaching in all parts of life and not just
              coding. Let's build the future!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
