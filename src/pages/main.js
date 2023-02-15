import { HashLink as Link } from "react-router-hash-link";
import bcheader from "../../src/bcheader.png"

const Main = (props) => {
    return <>
<div className="header">
    <div className="nav">
    <ul className="navigationlist">
    <li className="navigationli"><Link to="#top">Home</Link></li>
    <li className="navigationli"><Link to="#about">About/Skills</Link></li>
    <li className="navigationli"><Link to="#projects">Projects</Link></li>
    <li className="navigationli"><Link to="#contact">Contact</Link></li>
    <li className="navigationli"><Link to="https://docs.google.com/document/d/1I_atmT0EHkD7Jz5G2tXVbIPgGBlGOfOV9rOQMPNK3MU/edit?usp=sharing" target="_blank">Resume</Link></li>
    </ul>
    </div>
      <img src={bcheader} alt="Brianne Camesi Full-Stack Web Developer" width="800" className="headerimg"/>
    </div>
</>
  };
  
  export default Main;