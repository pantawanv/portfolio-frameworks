import profileImage from "./assets/pb.png";
import logoImage from "./assets/logo2_cropped.png";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import mailIcon from "./assets/mail.png";
import phoneIcon from "./assets/phone-call.png";

function App() {
  return (
    <main>
      <section id="home" className="portfolio">
        <nav className="portfolio-nav">
          <div className="is-flex is-align-items-center is-justify-content-space-between">
            <a href="#home">
              <img className="logo" src={logoImage} alt="Logo" />
            </a>

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
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>

          <a href="mailto:example@example.com" aria-label="Email">
            <img src={mailIcon} alt="Email" className="social-icon" />
          </a>
        </div>

        <img
          className="profile-image"
          src={profileImage}
          alt="Profile portrait"
        />
      </section>

      <section
        id="about"
        className="content-section is-flex is-flex-direction-column is-align-items-center has-text-centered"
      >
        <h2 className="title has-text-white has-text-weight-light">About Me</h2>

        <p className="about-text has-text-white">
          I'm a Web Development student currently looking for an internship
          where I can contribute to existing projects, gain hands-on experience,
          and continue developing my skills as a developer. I enjoy working
          across the full stack, creating clean and intuitive frontend
          experiences that are both visually appealing and easy to use, while
          also enjoying the logic behind the scenes - from APIs and databases to
          backend functionality.
        </p>

        <p className="about-text has-text-white">
          I also have experience with app development using React Native and
          Kotlin with Jetpack Compose. What motivates me most is creating
          solutions that are useful and meaningful to the people who use them.
          I'm always curious to learn, take on new challenges, and grow as a
          developer - ideally as part of a team where I can contribute and
          continue growing over time.
        </p>

        <p className="has-text-white mt-4">
          Visit my LinkedIn to learn more about my background, experience, and
          skills.
        </p>

        <a
          href="https://www.linkedin.com/in/pantawan-vongvattanakun-9a2b0438b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            className="section-icon mt-3"
            src={linkedinIcon}
            alt="LinkedIn"
          />
        </a>
      </section>

      <section
        id="projects"
        className="content-section is-flex is-flex-direction-column is-align-items-center has-text-centered"
      >
        <h2 className="title has-text-white has-text-weight-light">
          My Projects
        </h2>

        <p className="has-text-white mt-4">
          Visit my GitHub to see some of the projects I've worked on.
        </p>

        <p className="has-text-white mt-4">
          Click the GitHub icon below to view my repositories!
        </p>

        <a
          href="https://github.com/pantawanv?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img className="section-icon mt-3" src={githubIcon} alt="GitHub" />
        </a>
      </section>

      <section
        id="contact"
        className="content-section is-flex is-flex-direction-column is-align-items-center has-text-centered"
      >
        <h2 className="title has-text-white has-text-weight-light">Contact</h2>

        <p className="has-text-white mt-4">Here is how you can reach me!</p>

        <p className="has-text-white mt-4">
          <img className="contact-icon" src={mailIcon} alt="Email" />
          <span className="contact-text">mail: pantawan@live.dk</span>
        </p>

        <p className="has-text-white mt-4">
          <img className="contact-icon" src={phoneIcon} alt="Phone" />
          <span className="contact-text">phone: +45 29 66 14 26</span>
        </p>
      </section>
    </main>
  );
}

export default App;
