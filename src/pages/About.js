import Freya from "../images/freya.jpg";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="abouttext">
          <h3>Learn more about me.</h3>
          <h1>Nice to meet you, my name is Bri.</h1>
          <p>
            I have a huge interest in science and technology, which has
            influenced what I have decided to study and pursue. My passion for
            web design started over 15 year ago when I was a teenager playing
            around on the computer and I ended up teaching myself HTML, CSS, and Adobe
            Photoshop for fun. Not long after that, I took on learning how to
            use PHP and WordPress and how to deploy personal websites.
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
            floral design.
          </p>
          <p>
            My work style is very detail-oriented and I strive to create clean,
            user-friendly, and responsive websites. I am also very passionate
            about accessibility and making sure that my websites are usable for
            everyone. I am always looking for new opportunities to learn and
            grow as a developer.
          </p>
        </div>
        <div className="aboutimage" style={{textAlign: "center"}}>
          <img
            src={Freya}
            alt="Freya the pomeranian"
            width="70%"
            className="imgborder"
            style={{ float: "right" }}
          />
        </div>
      </div>
      <div className="skillscontainer">
        <div className="skills">
          <h3>What I know.</h3>
          <h1 className="h1gray">Skills/Technologies</h1>
          <div className="skillslists">
            <div className="skillsgrid">
              <h4>Frontend</h4>
              <ul className="techul">
                <li className="techli">HTML</li>
                <li className="techli">CSS</li>
                <li className="techli">JavaScript</li>
                <li className="techli">React</li>
                <li className="techli">Vue</li>
                <li className="techli">Bootstrap</li>
                <li className="techli">Tailwind CSS</li>
                <li className="techli">Sass</li>
              </ul>
            </div>
            <div className="skillsgrid">
              <h4>Backend</h4>
              <ul className="techul">
                <li className="techli">PHP</li>
                <li className="techli">Python</li>
                <li className="techli">Node.js</li>
                <li className="techli">Express</li>
                <li className="techli">MongoDB</li>
                <li className="techli">MySQL</li>
                <li className="techli">PostgreSQL</li>
                <li className="techli">REST</li>
                <li className="techli">Django</li>
              </ul>
            </div>
            <div className="skillsgrid">
              <h4>Other</h4>
              <ul className="techul">
                <li className="techli">Microsoft Office Suite</li>
                <li className="techli">Adobe Creative Suite</li>
                <li className="techli">WordPress</li>
                <li className="techli">Git</li>
                <li className="techli">GitHub</li>
                <li className="techli">Heroku</li>
                <li className="techli">Netlify</li>
                <li className="techli">Vercel</li>
                <li className="techli">AWS Amplify</li>
                <li className="techli">Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
        <h3 className="h3center">And continuously learning more.</h3></p>
      </div>

      <div className="education">
        <h3>My journey in STEM.</h3>
        <h1>Education</h1>
        <p>
          <h2>Software Engineering Immersive - General Assembly</h2>
          Rigorous full-stack software engineering program with over 450 hours
          of training.
        </p>
        <hr />
        <p>
          <h2>Bachelor's Degree in Biology - PennWest California</h2>
          Genetics, microbiology, organic chemistry, analytical chemistry,
          biochemistry, molecular biology, immunology, anatomy and physiology.
          Hands-on laboratory research experience including pipetting,
          titrations, PCR, electrophoresis, microscopy, sterile technique,
          chromatography, spectroscopy, cell culturing. Field sampling and
          analysis experience.
        </p>
        <hr />
        <p>
          <h2>
            Associate Degree in Science - Community College of Allegheny County
          </h2>
          Scientific Coursework: biology, chemistry, physics, and mathematics.
          Strong foundation in laboratory techniques and scientific research
          methodologies, with an emphasis on problem-solving and critical
          thinking skills.
        </p>
      </div>
    </div>
  );
}
