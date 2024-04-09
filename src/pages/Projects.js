import Ff1 from "../images/projects/feelingfriends1.png";
import Ff2 from "../images/projects/feelingfriends2.png";
import Ecopath1 from "../images/projects/ecopath1.png";
import Ecopath2 from "../images/projects/ecopath2.png";
import Everbloom from "../images/projects/everbloom.png";
import Entolog from "../images/projects/entolog.jpeg";
import Mmtc1 from "../images/projects/mmtc1.png";
import Mmtc2 from "../images/projects/mmtc2.png";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <h3>What I have created and contributed to.</h3>
        <h1>Project Portfolio</h1>
        <div className="projectcontainer">
          <div className="projectinfo">
            <h2>Feeling Friends</h2>
            <p>
              Feeling Friends is a user-friendly Edtech app designed with
              neurodiverse students in mind. It addresses a range of challenges
              they may face, including behavioral issues, emotional regulation,
              social interactions, and executive functioning. The app offers a
              dual perspective: one for students and one for teachers. Feeling
              Friends was developed collaboratively with a team of UX/UI experts
              and software engineers during a 3-day hackathon and won People's
              Choice app. We are committed to ongoing updates to enhance the
              app's capabilities.
            </p>
            <p style={{ textAlign: "center" }}>
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
            <p>
              <h2>Technologies Used:</h2>
              <p style={{ fontFamily: "Ubuntu Mono" }}>
                React, Express, Node.js, MongoDB, Tailwind, Framer Motion
              </p>
            </p>
          </div>
          <div className="projectimages">
            <img
              className="mainprojectsimg"
              src={Ff1}
              alt="Feeling Friends Screenshot 1"
            />
            <img
              className="mainprojectsimg"
              src={Ff2}
              alt="Feeling Friends Screenshot 2"
            />
          </div>
        </div>
      
      <hr />
        <div className="projectcontainer">
          <div className="projectimages">
          <img
              className="projectsimg"
              src={Mmtc1}
              alt="TOPS Covid Tracker Screenshot 1"
            />
            <img
              className="projectsimg"
              src={Mmtc2}
              alt="TOPS Covid Tracker Screenshot 2"
            />
          </div>

          <div className="projectinfo">
            <h2>The Opportunity Project 2023 - Make My Test Count</h2>
            <p>
              This project was a collaboration with a team of 15+ Software
              Engineers, UI Designers, UX Researchers, Data Scientists, and Data
              Analysts.{" "}
              <a
                className="link"
                href="https://opportunity.census.gov/"
                target="_blank"
                rel="noreferrer"
              >
                The Opportunity Project
              </a>{" "}
              is led by the US Census Bureau, the US Department of Commerce, and
              the FDA. We used federal data to build an application focused on
              innovations from the COVID-19 pandemic, empowering consumers
              (patients) through knowledge of privacy and security regarding
              their health data.
            </p>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://github.com/RosanneE/CovidTracker-TOPS2023"
                target="_blank"
                rel="noreferrer"
              >
                <button>Github</button>
              </a>
              <a href="https://covidtracker-tops2023.vercel.app/" target="_blank" rel="noreferrer">
                <button>Demo</button>
              </a>
            </p>
            <p>
              <h2>Technologies Used:</h2>
              <p style={{ fontFamily: "Ubuntu Mono" }}>
                React, Express, Node.js, MongoDB, Bootstrap
              </p>
            </p>
          </div>
        </div>
        </div>
        <div className="note">
        Note: Some of the backends on these projects might not work on account
        of some deployment services being sunset, or they may be slow to load because of free services. <br />
        Please bare with me while I fix these. Any errors in the live demos are
        due to deployment issues and not the project itself.
      </div>
      <div className="projects">
        <div className="projectcontainer">
          <div className="projectinfo">
            <h2>EcoPath</h2>
            <p>
              EcoPath is a nature trail tracker application that allows hikers
              and nature enthusiasts to track their trail routes, record
              observations of flora and fauna, and share their experiences with
              others.
            </p>
            <p>
              Each log entry allows you to record the date, time, location,
              length of the hike in miles, upload an image, and record any notes
              or observations made during the hike. You can also view all of
              your previous logs and edit or delete them as needed.
            </p>
            <p>This app was designed by me.</p>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://github.com/freckledspider/ecopathfrontend"
                target="_blank"
                rel="noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://ecopath.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
            </p>
            <p>
              <h2>Technologies Used:</h2>
              <p style={{ fontFamily: "Ubuntu Mono" }}>
                Vue, Express, Node.js, MongoDB
              </p>
            </p>
          </div>
          <div className="projectimages">
            <img
              className="projectsimg"
              src={Ecopath1}
              alt="Ecopath Screenshot 1"
            />
            <img
              className="projectsimg"
              src={Ecopath2}
              alt="Ecopath Screenshot 2"
            />
          </div>
        </div>

        <hr />

        <div className="projectcontainer">
          <div className="projectimages">
            <img
              className="projectsimg"
              src={Everbloom}
              alt="Everbloom Screenshot"
            />
          </div>
          <div className="projectinfo">
            <h2>Everbloom Florist</h2>
            <p>
              Everbloom is an online florist shop concept. Customers can easily
              browse through different bouquets and select their preferred
              flowers, as well as add a gift card message if they choose.
            </p>
            <p>
              This app uses CRUD (Create, Read, Update, Delete) functionality
              for the shopping cart. The create operation adds the item to the
              cart. The read operation displays the item's price and other
              information. The update operation edits the card message for that
              product. And the delete operation removes the item from the
              shopping cart.
            </p>
            <p>This app was designed by me.</p>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://github.com/freckledspider/everbloomfrontend"
                target="_blank"
                rel="noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://everbloomflorist.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
            </p>
            <p>
              <h2>Technologies Used:</h2>
              <p style={{ fontFamily: "Ubuntu Mono" }}>
                React, Django, Python, PostgreSQL
              </p>
            </p>
          </div>
        </div>
        <hr />
        <div className="projectcontainer">
          <div className="projectinfo">
            <h2>Entolog</h2>
            <p>
              Entolog is an application that allows you to keep track of insects
              you have pinned in your physical collection. This application was
              made in order to keep a log of a sometimes too large insect
              collection. Instead of having to sort through actual specimens or
              touch them and possibly damaging them, this can provide a digital log
              to keep track. I chose this concept since I enjoy collecting
              pinned insects and identifying them and took entomology as one of
              my classes towards my bachelor's degree in biology.
            </p>
            <p>This app was designed by me.</p>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://github.com/freckledspider/entolog"
                target="_blank"
                rel="noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href="https://entolog.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
            </p>
            <p>
              <h2>Technologies Used:</h2>
              <p style={{ fontFamily: "Ubuntu Mono" }}>
                HTML, CSS, Javascript, Node.js, Express, jQuery, EJS, MongoDB
              </p>
            </p>
          </div>
          <div className="projectimages">
            <img
              className="projectsimg"
              src={Entolog}
              alt="Entolog Screenshot"
            />
          </div>
        </div>
      </div>
    </>
  );
}
