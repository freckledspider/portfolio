import React, { useState } from "react"; // Import useState
import Hamburger from "../images/hamburger.png";

export default function Nav() {
  // State to manage the visibility of the hamburger menu links
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <div className="nav">
          <div className="navtitle">Bri Camesi</div>
          <div className="hamburgermenu">
            {" "}
            {/* Add onClick event */}
            <img
              className="hamburgericon"
              src={Hamburger}
              alt="Menu"
              onClick={toggleMenu}
            />
            {/* Conditionally render the links based on isMenuOpen state */}
            {isMenuOpen && (
              <div className="hamburgermenulinks">
                <ul className="hamburgerlist">
                  <li className="hamburgerli">
                    <a href="/">Home</a>
                  </li>
                  <li className="hamburgerli">
                    <a href="/about">About/Skills</a>
                  </li>
                  <li className="hamburgerli">
                    <a href="/projects">Projects</a>
                  </li>
                  <li className="hamburgerli">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="hamburgerli">
                    <a
                      href="https://github.com/freckledspider"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="hamburgerli">
                    <a
                      href="https://www.linkedin.com/in/briannecamesi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="navlinks">
            <ul className="navigationlist">
              <li className="navigationli">
                <a href="/">Home</a>
              </li>
              <li className="navigationli">
                <a href="/about">About/Skills</a>
              </li>
              <li className="navigationli">
                <a href="/projects">Projects</a>
              </li>
              <li className="navigationli">
                <a href="/contact">Contact</a>
              </li>
              <li className="navigationli">
                <a
                  href="https://github.com/freckledspider"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="navigationli">
                <a
                  href="https://www.linkedin.com/in/briannecamesi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
