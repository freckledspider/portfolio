import placeholder from "../../src/imageplaceholder.jpg"

const Projects = (props) => {
    return <>
<div id="projects" className="projects">
  <h2>Projects</h2>
  <table className="projectstable">
  <tr>
    <td className="projectstd"><img src={placeholder} alt="Placeholder" width="250" className="imgborder"/>
    <h4>Ghibli  Films</h4>
    <a href="https://github.com/freckledspider/ghibli-films" target="_blank" rel="noreferrer">GitHub</a> | <a href="/">Live Demo</a><br/>
    <span className="projectdescription">This application is made to view information on any of the Studio Ghibli films. Information includes the title, original title, romanised title, description, year, and some pictures of the movie.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript</span>
    </td>

    <td><img src={placeholder} alt="Placeholder" width="250" className="imgborder"/>
    <h4>Entolog</h4>
    <a href="https://github.com/freckledspider/entolog" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://entolog.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a><br/>
    <span className="projectdescription">Entolog is an application that allows you to keep track of insects you have pinned in your physical collection.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Express, MongoDB</span>
    </td>

    <td><img src={placeholder} alt="Placeholder" width="250" className="imgborder"/>
    <h4>Jobify</h4>
    <a href="https://github.com/Alenmnoian4/Jobify_Frontend" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://clever-platypus-dd3d98.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a><br/>
    <span className="projectdescription">(Group Project) Jobify allows users to save all job postings, from any other site, in one central location.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Express, React, MongoDB</span>
    </td>
  </tr>
  <tr>
    <td><img src={placeholder} alt="Placeholder" width="250" className="imgborder"/>
    <h4>Pokedex</h4>
    <a href="https://github.com/freckledspider/pokedex" target="_blank" rel="noreferrer">GitHub</a> | <a href="/" target="_blank" rel="noreferrer">Live Demo</a><br/>
    <span className="projectdescription">A CRUD app that allows you to create a pokemon team of six.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Express</span>
    </td>
    <td></td>
    <td></td>
  </tr>
</table>
</div>
</>
  };
  
export default Projects;