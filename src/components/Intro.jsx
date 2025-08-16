import IconsFlex from "./IconsFlex";
import useScrollReveal from "./useScrollReveal";
function Intro() {
  useScrollReveal();
  return (
    <div
      id="home"
      className="p-4 pt-6 text-left w-full sm:w-3/4 sm:p-6 md:w-2/3 md:p-8 lg:pt-18 lg:p-12 min-h-screen flex flex-col justify-center scroll-reveal"
    >
      <p className="text-xl sm:text-2xl text-text-muted animate-fade-in">
        Hello There 👋
      </p>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl my-2 font-bold">
        <span className="text-gradient">
          Sumit Patel
        </span>
      </h1>

      <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 text-text-secondary">
        Aspiring <span className="text-primary font-semibold">Machine Learning Engineer</span> • <span className="text-accent font-semibold">Full-Stack Developer</span>
      </h2>

      <p className="max-w-xl text-text-muted leading-relaxed mb-6">
        Skilled in Full Stack Development and continuously exploring the world
        of AI & ML to create innovative solutions that bridge technology and user experience.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 items-center">
        <IconsFlex />
        
        <a
          href="#myprojects"
          className="btn-primary inline-block text-center"
        >
          View Projects
        </a>
        
        <a
          href="#contact"
          className="btn-outline inline-block text-center"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Intro;
