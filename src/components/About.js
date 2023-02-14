import aboutphoto from "../../src/aboutphoto.jpg"
import freya from "../../src/freya.jpg"

const About = (props) => {
    return <>
<div id="about" className="about">
  <h2>About</h2>
  <table>
	<tr>
    	<td><img src={aboutphoto} alt="Brianne Camesi" width="350" className="imgborder" />
      </td>
      <td className="abouttd">
  I am a highly creative <b>full-stack web developer</b> with a background in the sciences, specifically biology. My boundless curiosity and desire to learn drives my passion for <b>science and technology</b>. I excel in environments that foster <b>innovation, productivity, and teamwork</b>. In my leisure time, I enjoy playing video games, engaging in artistic endeavors such as drawing and painting, exploring nature, and spending time with my Pomeranian.
    </td>
    </tr>
  </table>
  <h3>Skills</h3>
  <table>
	<tr>
    	<td valign="top">
      <td className="tableborder abouttd">
      <b>Languages</b><br/>
      <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>SQL</li>
      </ul>
      <b>Libraries and Frameworks</b><br/>
      <ul>
      <li>React</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Mongoose</li>
      <li>Django</li>
      <li>MVC</li>
      <li>Django</li>
      <li>jQuery</li>
      </ul>
      </td>
      <td className="abouttd">
      <b>Database</b><br/>
      <ul>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      </ul>
      <b>Other</b><br/>
      <ul>
      <li>RESTful Routing JSON</li>
      <li>AJAX</li>
      <li>DOM</li>
      <li>Responsive Design</li>
      <li>Wordpress</li>
      </ul>
      <br/>
      And always up for<br/> learning so much more.
      </td>
      </td>
      <th><img src={freya} alt="A Pomeranian named Freya" width="350" className="imgborder"/>
      </th>
    </tr>
  </table>
</div>
</>
  };
  
export default About;