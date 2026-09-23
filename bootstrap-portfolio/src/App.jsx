import profileImage from "./assets/pb.png";
import logoImage from "./assets/logo2_cropped.png";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import mailIcon from "./assets/mail.png";

function App() {
  return (
    <main className="position-relative vh-100 overflow-hidden">
      <nav className="position-absolute top-0 start-0 end-0 mt-4 px-4 navbar-custom">
        <div className="d-flex align-items-center justify-content-between">
          <img
            className="object-fit-contain"
            src={logoImage}
            alt="Logo"
            width={48}
            height={48}
          />

          <div className="d-flex gap-3">
            <a href="#" className="text-white text-decoration-none">
              About
            </a>
            <a href="#" className="text-white text-decoration-none">
              Projects
            </a>
            <a href="#" className="text-white text-decoration-none">
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
            <button className="btn rounded-pill project-button me-2">
              My Projects
            </button>

            <button className="btn btn-outline-light rounded-pill">
              Get in Touch
            </button>
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
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
      <img
        className="position-absolute bottom-0 end-0 z-3 profile-image"
        src={profileImage}
        alt="Profile"
      />
    </main>
  );
}

export default App;
