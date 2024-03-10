import aboutphoto from "../../src/images/aboutphoto.jpg";

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
          <p style={{textAlign: "center"}}>
          <a href="/about"><button>
            Learn More
          </button></a></p>
        </div>
      </div>

      <div className="quote">Quote?</div>
    </div>
  );
}