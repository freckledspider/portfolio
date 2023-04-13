const Projects = (props) => {
    return <>
<div id="projects" className="projects">
  <h2>Projects</h2>
  <table>
  <tr>
  <td>
  <img src="https://i.imgur.com/NbjVpqV.png" alt="Ecopath screenshot" width="460" className="imgborder"/>
  </td>
    <td>
  <img src="https://i.imgur.com/XHLSEBW.png" alt="Ecopath screenshot" width="460" className="imgborder"/>
  </td>
  </tr>
  </table>
    <h4>EcoPath</h4>
    <a href="https://github.com/freckledspider/ecopathfrontend" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://ecopath.netlify.app/">Live Demo</a><br/>
    <span className="projectdescription">(Full-stack application) EcoPath is a nature trail tracker application that allows hikers and nature enthusiasts to track their trail routes, record observations of flora and fauna, and share their experiences with others.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Express, Vue</span>
    <br/>
  <table className="projectstable">
  <tr>
    <td className="projectstd"><img src="https://i.imgur.com/DD1JFFu.png" alt="Everbloom screenshot" width="250" className="imgborder"/>
    <h4>Everbloom Florist</h4>
    <a href="https://github.com/freckledspider/everbloomfrontend" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://everbloomflorist.netlify.app/">Live Demo</a><br/>
    <span className="projectdescription">(Full-stack application) Everbloom is an online florist shop concept. Customers can easily browse through different bouquets and select their preferred flowers, as well as add a gift card message if they choose.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Django, Python</span>
    </td>

    <td><img src="https://i.imgur.com/5fI5vry.jpg" alt="Entolog screenshot" width="250" className="imgborder"/>
    <h4>Entolog</h4>
    <a href="https://github.com/freckledspider/entolog" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://entolog.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a><br/>
    <span className="projectdescription">(Full-stack application) Entolog is an application that allows you to keep track of insects you have pinned in your physical collection.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Express, MongoDB</span>
    </td>

    <td><img src="https://i.imgur.com/p1ahl2N.png" alt="Jobify screenshot" width="250" className="imgborder"/>
    <h4>Jobify</h4>
    <a href="https://github.com/Alenmnoian4/Jobify_Frontend" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://clever-platypus-dd3d98.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a><br/>
    <span className="projectdescription">(Full-stack application Group Project) Jobify allows users to save all job postings, from any other site, in one central location.<br/><br/>
    <b>Built with:</b> HTML, CSS, Javascript, Express, React, MongoDB</span>
    </td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
</div>
</>
  };
  
export default Projects;