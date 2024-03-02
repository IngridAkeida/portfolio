import { FaMedium } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Sidebar: React.FC = () => {

  const styleLi = "bg-cyan-950 p-4 rounded-xl";
  const styleA = "text-gray-300 hover:text-white mb-6";
  const styleI = "fab fa-linkedin-in";

  const externalLinks = [
    { 
      nameLink: 'LinkedIn',
      link: "https://www.linkedin.com/",
      icon: SlSocialLinkedin,
    }, 
    { 
      nameLink: 'Medium',
      link: "https://medium.com/",
      icon: FaMedium,
    }, 
    { 
      nameLink: 'GitHub',
      link: "https://github.com/",
      icon: FiGithub,
    }, 
  ] 

  return (
    <div className="h-screen w-32 flex flex-col items-end justify-center fixed ">
      <ul className=" flex flex-col gap-4">
        {externalLinks.map(( link, index)=>(
          <li key={index} className={styleLi}>
            <a href={link.link} target="_blank" rel="noopener noreferrer" className={styleA} aria-label={`Access my ${link.nameLink} using this link`}>
              <span className={styleI}><link.icon size={32}/></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;