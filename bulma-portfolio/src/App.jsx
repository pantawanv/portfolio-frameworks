import profileImage from "./assets/pb.png";
import logoImage from "./assets/logo2_cropped.png";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import mailIcon from "./assets/mail.png";

function App() {
  return (
    <main>
      <section className="portfolio">
        <nav className="portfolio-nav">
          <div className="is-flex is-align-items-center is-justify-content-space-between">
            <img className="logo" src={logoImage} alt="Logo" />
            <div className="is-flex nav-links">
              <a href="#about" className="nav-link has-text-white">
                About
              </a>
              <a href="#projects" className="nav-link has-text-white">
                Projects
              </a>
              <a href="#contact" className="nav-link has-text-white">
                Contact
              </a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label is-uppercase">Web Developer</p>
            <h1 className="hero-title">
              Building
              <br />
              Digital
              <br />
              Experiences
            </h1>
            <p className="hero-description">
              Clean design. Functional solutions.
              <br />
              Real impact.
            </p>
            <div className="mt-5">
              <a href="#projects" className="button project-button is-rounded">
                My Projects
              </a>

              <a href="#contact" className="button contact-button is-rounded">
                Get in Touch
              </a>
            </div>
            <p className="skills-text is-uppercase">
              Web Development
              <span>•</span>
              UI/UX Design
              <span>•</span>
              Problem Solving
            </p>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>

          <a href="mailto:example@example.com">
            <img src={mailIcon} alt="Email" className="social-icon" />
          </a>
        </div>
        <img className="profile-image" src={profileImage} alt="Profile" />
      </section>

      <section id="about" className="projects-section">
        <h2 className="title has-text-white">About me</h2>

        <p className="has-text-white">Here are some information about me.</p>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="title has-text-white">My Projects</h2>

        <p className="has-text-white">
          Here are some of the projects I have worked on.
        </p>
      </section>

      <section id="contact" className="projects-section">
        <h2 className="title has-text-white">Contact</h2>

        <p className="has-text-white">Here is how to contact me.</p>
      </section>
    </main>
  );
}

export default App;
