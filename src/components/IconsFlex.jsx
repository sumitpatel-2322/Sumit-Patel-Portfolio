import IconLink from "./Iconlink";
import { GitHubIcon, InstagramIcon, LinkedInIcon, GmailIcon } from "./icons";

function IconsFlex() {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <IconLink 
        href="https://github.com/sumitpatel-2322"
        label="GitHub Profile"
      >
        <GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200" />
      </IconLink>
      
      <IconLink
        href="https://www.linkedin.com/in/sumit-patel-42697b324/"
        label="LinkedIn Profile"
      >
        <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200" />
      </IconLink>
      
      <IconLink
        href="https://www.instagram.com/_sumit._0815?igsh=MWN5czJ6b3Bqa2s5bg=="
        label="Instagram Profile"
      >
        <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200" />
      </IconLink>
      
      <IconLink
        href="mailto:sumitpatel2907@gmail.com"
        label="Email me"
      >
        <GmailIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200" />
      </IconLink>
    </div>
  );
}

export default IconsFlex;
