import profileImage from './assets/pb.png'
import logoImage from './assets/logo2_cropped.png'
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import mailIcon from './assets/mail.png'
import phoneIcon from './assets/phone.png'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">

   <nav className="absolute left-4 right-6 top-6">
  <div className="flex items-center justify-between">

    <img
      className="h-12 w-12 object-contain"
      src={logoImage}
      alt="Logo"
    />

    <div className="flex gap-6">
      <a href="#" className="text-gray-200 hover:text-white">
        About
      </a>

      <a href="#" className="text-gray-200 hover:text-white">
        Projects
      </a>

      <a href="#" className="text-gray-200 hover:text-white">
        Contact 
      </a>
    </div>

  </div>
</nav>
<div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-left">

  <p className="mt-8 mb-5 text-xs uppercase tracking-[0.35em] text-gray-400">
    Web Developer
  </p>

  <h1 className="text-6xl font-light leading-[1] tracking-tight text-white">Building
    <br />Digital
    <br />Experiences
  </h1>

  <p className="mt-8 max-w-lg text-gray-300">
    Clean design. Functional solutions.
    <br />
    Real impact.
  </p>

  <div className="mt-6">
    <button className="mr-2 rounded-full border border-gray-500 px-5 py-2 text-white hover:bg-white hover:text-black bg-gray-700">
      My Projects
    </button>

    <button className="rounded-full border border-gray-500 px-5 py-2 text-white hover:bg-white hover:text-black">
      Get in Touch
    </button>
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
  <a href="#" aria-label="GitHub">
    <img
      className="h-6 w-6 brightness-0 invert transition-opacity hover:opacity-60"
      src={githubIcon}
      alt=""
    />
  </a>

  <a href="#" aria-label="LinkedIn">
    <img
      className="h-6 w-6 brightness-0 invert transition-opacity hover:opacity-60"
      src={linkedinIcon}
      alt=""
    />
  </a>

  <a href="#" aria-label="Email">
    <img
      className="h-6 w-6 brightness-0 invert transition-opacity hover:opacity-60"
      src={mailIcon}
      alt=""
    />
  </a>
</div>


      
      <img
        className="absolute bottom-0 right-0 z-10 w-[45%] max-w-[400px]"
        src={profileImage}
        alt="Profile portrait"
      />
    </main>
  )
}
  
export default App
