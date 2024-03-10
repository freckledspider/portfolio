export default function Nav() {
  return (
    <>
      <div>
        <div className="nav">
          <div className="navtitle">
           Bri Camesi
          </div>
          <div className="navlinks">
            <ul className="navigationlist">
              <li className="navigationli">
                <a href="/">Home</a>
              </li>
              <li className="navigationli">
                <a href="/about">About</a>
              </li>
              <li className="navigationli">
                <a href="/projects">Projects</a>
              </li>
              <li className="navigationli">
                <a href="/contact">Contact</a>
              </li>
              <li className="navigationli">
                <a
                  href="https://docs.google.com/document/d/1fj4MzxnzCnZ1bCR8lMlH8JYKF87fSvrqPMtRH2ZGLgM/edit?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li className="navigationli">
                <a href="https://github.com/freckledspider" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
