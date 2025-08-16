import IconLink from "./Iconlink"
import { GitHubIcon, InstagramIcon, LinkedInIcon,GmailIcon } from "./icons";
function IconsFlex(){
    return(
        <>
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
      </>
    )
}
export default IconsFlex;