import aboutphoto from "../../src/images/aboutphoto.jpg";
import Ff1 from "../images/projects/feelingfriends1.png";
import Ff2 from "../images/projects/feelingfriends2.png";

export default function Main() {
  return (
    <div>
      <div className="about">
        <div className="aboutimage">
          <img
            src={aboutphoto}
            alt="Brianne Camesi"
            width="70%"
            className="imgborder"
          />
        </div>
        <div className="abouttext">
          <h3>Hello, my name is Bri.</h3>
          <h2>
            Infusing each pixel with creativity, sculpting interfaces with
            meticulous care, and orchestrating user interactions that resonate
            and captivate.
          </h2>
          <p>
            As a frontend web developer, my passion for innovation, design, and
            continuous learning is the cornerstone of my professional journey. I
            thrive on exploring the latest technologies and design trends to
            create seamless, user-centric experiences.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="/about">
              <button>Learn More</button>
            </a>
          </p>
        </div>
      </div>

      <div className="quote">
        “The creation of a single world comes from a huge number of fragments
        and chaos.” ― Hayao Miyazaki
      </div>

      <div className="featured">
        <h3>What I have been working on.</h3>
        <h1>Featured Project - Feeling Friends</h1>
        <p>
          Feeling Friends is a user-friendly Edtech app designed with
          neurodiverse students in mind. It addresses a range of challenges they
          may face, including behavioral issues, emotional regulation, social
          interactions, and executive functioning. The app offers a dual
          perspective: one for students and one for teachers.
        </p>
        <p>
          Feeling Friends was developed collaboratively with a team of UX/UI
          experts and software engineers during a 3-day hackathon and won
          People's Choice app. We are committed to ongoing updates to enhance
          the app's capabilities.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2rem",
            width: "75%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <h2>Technologies Used:</h2>
            <ul className="techul">
              <li className="techli">React</li>
              <li className="techli">Express</li>
              <li className="techli">Node.js</li>
              <li className="techli">MongoDB</li>
              <li className="techli">Tailwind</li>
              <li className="techli">Framer Motion</li>
            </ul>
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                href="https://github.com/Noordibou/Feeling-Friends"
                target="_blank"
                rel="noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://mindful-journal.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
            </p>
          </div>
          <div>
            <img
              className="featuredimg"
              src={Ff1}
              alt="Feeling Friends Screenshot 1"
            />
            <img
              className="featuredimg"
              src={Ff2}
              alt="Feeling Friends Screenshot 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
