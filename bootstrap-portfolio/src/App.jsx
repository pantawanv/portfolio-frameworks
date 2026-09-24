import profileImage from "./assets/pb.png";
import logoImage from "./assets/logo2_cropped.png";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import mailIcon from "./assets/mail.png";
import phoneIcon from "./assets/phone-call.png";

function App() {
  return (
    <main>
      <section
        id="home"
        className="position-relative min-vh-100 overflow-hidden"
      >
        <nav className="position-fixed top-0 start-0 end-0 mt-4 px-4 z-3">
          <div className="d-flex align-items-center justify-content-between">
            <a href="#home">
              <img
                className="logo-image"
                src={logoImage}
                alt="Logo"
                width={50}
                height={40}
              />
            </a>

            <div className="d-flex gap-2 gap-sm-4">
              <a href="#about" className="text-white text-decoration-none">
                About
              </a>

              <a href="#projects" className="text-white text-decoration-none">
                Projects
              </a>

              <a href="#contact" className="text-white text-decoration-none">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="position-absolute top-50 start-0 translate-middle-y z-3">
          <div className="text-start ps-4 ms-2">
            <p className="text-uppercase text-secondary small mb-4">
              Web Developer
            </p>

            <h1 className="hero-title text-white">
              Building
              <br />
              Digital
              <br />
              Experiences
            </h1>

            <p className="text-white mt-4 mb-0">
              Clean design. Functional solutions.
              <br />
              Real impact.
            </p>

            <div className="mt-4">
              <a
                href="#projects"
                className="btn rounded-pill project-button me-2"
              >
                My Projects
              </a>

              <a href="#contact" className="btn btn-outline-light rounded-pill">
                Get in Touch
              </a>
            </div>

            <p className="text-secondary small text-uppercase mt-5 mb-0">
              Web Development
              <span className="mx-3">•</span>
              UI/UX Design
              <span className="mx-3">•</span>
              Problem Solving
            </p>
          </div>
        </div>

        <div className="position-absolute bottom-0 end-0 mb-4 me-4 d-flex gap-3 social-links">
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
          className="position-absolute bottom-0 end-0 z-2 profile-image"
          src={profileImage}
          alt="Profile portrait"
        />
      </section>

      <section
        id="about"
        className="min-vh-100 d-flex flex-column align-items-center py-5 px-4 text-white text-center"
      >
        <h2 className="fw-light">About Me</h2>

        <p className="mt-4 about-text text-white">
          I'm a Web Development student currently looking for an internship
          where I can contribute to existing projects, gain hands-on experience,
          and continue developing my skills as a developer. I enjoy working
          across the full stack, creating clean and intuitive frontend
          experiences that are both visually appealing and easy to use, while
          also enjoying the logic behind the scenes - from APIs and databases to
          backend functionality.
        </p>

        <p className="mt-4 about-text text-white">
          I also have experience with app development using React Native and
          Kotlin with Jetpack Compose. What motivates me most is creating
          solutions that are useful and meaningful to the people who use them.
          I'm always curious to learn, take on new challenges, and grow as a
          developer - ideally as part of a team where I can contribute and
          continue growing over time.
        </p>

        <p className="mt-4 text-white">
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
        className="min-vh-100 d-flex flex-column align-items-center py-5 px-4 text-center text-white"
      >
        <h2 className="fw-light">My Projects</h2>

        <p className="mt-4 text-white">
          Visit my GitHub to see some of the projects I've worked on.
        </p>

        <p className="mt-2 text-white">
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
        className="min-vh-100 d-flex flex-column align-items-center py-5 px-4 text-white text-center"
      >
        <h2 className="fw-light">Contact</h2>

        <p className="mt-4 text-white">Here is how you can reach me!</p>

        <p className="mt-2 text-white">
          <img className="contact-icon me-2" src={mailIcon} alt="Email" />
          mail: pantawan@live.dk
        </p>

        <p className="mt-2 text-white">
          <img className="contact-icon me-2" src={phoneIcon} alt="Phone" />
          phone: +45 29 66 14 26
        </p>
      </section>
    </main>
  );
}

export default App;
