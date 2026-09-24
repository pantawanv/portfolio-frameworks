import profileImage from "./assets/pb.png";
import logoImage from "./assets/logo2_cropped.png";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import mailIcon from "./assets/mail.png";
import phoneIcon from "./assets/phone-call.png";

function App() {
  return (
    <main>
      <section id="home" className="relative min-h-screen overflow-hidden">
        <nav className="fixed left-4 right-6 top-6 z-50">
          <div className="flex items-center justify-between">
            <a href="#home">
              <img
                className="ml-2 sm:ml-18 h-12 w-12 object-contain"
                src={logoImage}
                alt="Logo"
              />
            </a>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-200 hover:text-white">
                About
              </a>

              <a href="#projects" className="text-gray-200 hover:text-white">
                Projects
              </a>

              <a href="#contact" className="text-gray-200 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </nav>
        <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-left">
          <p className="mt-8 mb-5 text-xs uppercase tracking-[0.35em] text-gray-400">
            Web Developer
          </p>

          <h1 className="text-6xl font-light leading-[1] tracking-tight text-white">
            Building
            <br />
            Digital
            <br />
            Experiences
          </h1>

          <p className="mt-8 max-w-lg text-gray-300">
            Clean design. Functional solutions.
            <br />
            Real impact.
          </p>

          <div className="mt-6">
            <a
              href="#projects"
              className="mr-2 inline-block rounded-full border border-gray-500 bg-gray-700 px-5 py-2 text-white hover:bg-white hover:text-black"
            >
              My Projects
            </a>

            <a
              href="#contact"
              className="inline-block rounded-full border border-gray-500 px-5 py-2 text-white hover:bg-white hover:text-black"
            >
              Get in Touch
            </a>
          </div>

          <p className="mt-16 text-xs uppercase tracking-[0.25em] text-gray-500">
            Web Development
            <span className="mx-3">•</span>
            UI/UX Design
            <span className="mx-3">•</span>
            Problem Solving
          </p>
        </div>
        <div className="absolute bottom-8 right-8 z-20 flex gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              className="h-6 w-6 brightness-0 invert transition-opacity hover:opacity-60"
              src={githubIcon}
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              className="h-6 w-6 brightness-0 invert transition-opacity hover:opacity-60"
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>

          <a href="mailto:example@example.com" aria-label="Email">
            <img
              className="h-6 w-6 brightness-0 invert transition-opacity hover:opacity-60"
              src={mailIcon}
              alt="Email"
            />
          </a>
        </div>
        <img
          className="absolute bottom-0 right-0 z-10 w-[45%] max-w-[400px]"
          src={profileImage}
          alt="Profile portrait"
        />
      </section>

      <section
        id="about"
        className="flex min-h-screen flex-col items-center px-6 py-20 text-white"
      >
        <h2 className="text-4xl font-light">About Me</h2>

        <p className="mt-6 max-w-2xl text-gray-300">
          I'm a Web Development student currently looking for an internship
          where I can contribute to existing projects, gain hands-on experience,
          and continue developing my skills as a developer. I enjoy working
          across the full stack, creating clean and intuitive frontend
          experiences that are both visually appealing and easy to use, while
          also enjoying the logic behind the scenes - from APIs and databases to
          backend functionality.
        </p>

        <p className="mt-6 max-w-2xl text-gray-300">
          I also have experience with app development using React Native and
          Kotlin with Jetpack Compose. What motivates me most is creating
          solutions that are useful and meaningful to the people who use them.
          I'm always curious to learn, take on new challenges, and grow as a
          developer - ideally as part of a team where I can contribute and
          continue growing over time.
        </p>
        <p className="mt-6 text-gray-300">
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
            className="h-10 w-10 brightness-0 invert transition-opacity hover:opacity-60 mt-4"
            src={linkedinIcon}
            alt="LinkedIn"
          />
        </a>
      </section>

      <section
        id="projects"
        className="flex min-h-screen flex-col items-center px-6 py-20 text-center text-white"
      >
        <h2 className="text-4xl font-light">My Projects</h2>

        <p className="mt-6 text-gray-300">
          Visit my GitHub to see some of the projects I've worked on.
        </p>

        <p className="mt-6 text-gray-300">
          Click the GitHub icon below to view my repositories!
        </p>
        <a
          href="https://github.com/pantawanv?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            className="h-10 w-10 brightness-0 invert transition-opacity hover:opacity-60 mt-4"
            src={githubIcon}
            alt="GitHub"
          />
        </a>
      </section>

      <section id="contact" className="min-h-screen px-6 py-20 text-white">
        <h2 className="text-4xl font-light">Contact</h2>
        <p className="mt-6 text-gray-300">Here is how you can reach me!</p>
        <p className="mt-6 text-gray-300">
          {" "}
          <img
            className="h-5 w-5 inline-block mr-2 brightness-0 invert "
            src={mailIcon}
            alt="Email"
          />
          mail: pantawan@live.dk
        </p>
        <p className="mt-6 text-gray-300">
          {" "}
          <img
            className="h-5 w-5 inline-block mr-2 brightness-0 invert "
            src={phoneIcon}
            alt="Phone"
          />
          phone: +45 29 66 14 26
        </p>
      </section>
    </main>
  );
}

export default App;
