import Freya from "../images/freya.jpg";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="abouttext">
          <h3>Learn more about me.</h3>
          <h1>Nice to meet you, my name is Bri.</h1>
          <p>
            My passion for web design started over 15 year ago when I was a
            teenager playing around on the computer and taught myself HTML, CSS,
            and Adobe Photoshop for fun. Not long after that, I took on learning
            how to use PHP and WordPress and how to deploy personal websites.
          </p>
          <p>
            More recently, in 2023, I decided to pursue more formal training and
            studied web development through General Assembly's Software
            Engineering Immersive program. Ever since finishing the program, I
            have been working on various new projects and expanding my knowledge
            in more technologies.
          </p>
          <p>
            When I'm not coding, I enjoy spending time with my dog, Freya, and
            playing video games. I also have other creative skills and hobbies
            besides web design such as drawing, painting, sewing, crafts, and
            floral design. I am always looking for new opportunities to learn
            and grow as a developer.
          </p>
        </div>
        <div className="aboutimage">
          <img
            src={Freya}
            alt="Freya the pomeranian"
            width="70%"
            className="imgborder"
            style={{float: "right"}}
          />
        </div>
      </div>
      <div className="skillscontainer">
        <div className="skills">
        <h3>What I know.</h3>
        <h1 className="h1gray">Skills/Technologies</h1>
        <div className="skillslists">
        <div className="skillsgrid">
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </div>
        <div className="skillsgrid">
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </div>
        <div className="skillsgrid">
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </div>
        </div>
      </div></div>

    </div>
  );
}
