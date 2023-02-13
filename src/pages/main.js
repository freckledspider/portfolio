import { HashLink as Link } from "react-router-hash-link";

const Main = (props) => {
    return <>
<div className="header">
    <div className="nav">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="#about">About</Link></li>
    <li><Link to="#projects">Projects</Link></li>
    <li><Link to="#contact">Contact</Link></li>
    </ul>
    </div>
      <h1>Brianne Camesi</h1>
    </div>
</>
  };
  
  export default Main;