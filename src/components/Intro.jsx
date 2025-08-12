import { GitHubIcon, InstagramIcon, LinkedInIcon,GmailIcon } from "./icons";

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        w-10 h-10 sm:w-11 sm:h-11
        rounded-full
      "
      title={label}
    >
      {children}
    </a>
  );
}

function Intro() {
  return (
    <div
      id="home"
      className="m-[1rem] p-4 text-left w-full sm:w-3/4 sm:p-6 md:w-2/3 md:p-8 lg:p-12">
      <p className="text-xl sm:text-2xl">Hello There!!</p>
      <p className="text-4xl sm:text-5xl lg:text-6xl my-[0.25rem] font-semibold">
        Sumit Patel
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl">
        Aspiring Machine Learning Engineer from India
      </p>
      <p>
        Skilled in Full Stack Development and continuously exploring the world
        of AI & ML to create innovative solutions.
      </p>
      <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4" >
        <IconLink 
        href="https://github.com/sumitpatel-2322"
        label="GitHub Profile"
        ><GitHubIcon className="w-6 h-6"></GitHubIcon>
        </IconLink>
        <IconLink
        href="https://www.linkedin.com/in/sumit-patel-42697b324/"
        label="LinkedIn Profile"
        >
        <LinkedInIcon className="w-6 h-6"></LinkedInIcon>
        </IconLink>
        <IconLink
        href="https://www.instagram.com/_sumit._0815?igsh=MWN5czJ6b3Bqa2s5bg=="
        label="Instagram Profile">
          <InstagramIcon className="w-6 h-6"></InstagramIcon>
        </IconLink>
        <IconLink
        href="mailto:sumitpatel2907@gmail.com"
        label="Email me">
        <GmailIcon className="w-6 h-6"></GmailIcon>
        </IconLink>
      </div>
    </div>
  );
}
export default Intro;
