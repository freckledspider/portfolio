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
    <li className="navigationli"><Link to="https://docs.google.com/document/d/1fj4MzxnzCnZ1bCR8lMlH8JYKF87fSvrqPMtRH2ZGLgM/edit?usp=sharing" target="_blank">Resume</Link></li>
    <li className="navigationli"><Link to="https://github.com/freckledspider" target="_blank">GitHub</Link></li>
    </ul>
    </div>
      <img src={bcheader} alt="Brianne Camesi Full-Stack Web Developer" width="800" className="headerimg"/>
    </div>
</>
  };
  
  export default Main;