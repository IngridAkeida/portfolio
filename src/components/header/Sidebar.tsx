import { FaMedium } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";
import {IoLogoDribbble } from "react-icons/io";


const Sidebar: React.FC = () => {

  const styleLi = "bg-cyan-950 p-2 sm:p-4 rounded-xl";
  const styleA = "text-gray-300 hover:text-white mb-4 md:mb-6";

  const externalLinks = [
    { 
      nameLink: 'LinkedIn',
      link: "https://www.linkedin.com/in/ingrid-sanches/",
      icon: SlSocialLinkedin,
    }, 
    { 
      nameLink: 'GitHub',
      link: "https://github.com/IngridAkeida",
      icon: FiGithub,
    }, 
    { 
      nameLink: 'Medium',
      link: "https://medium.com/@ingridsanchesp",
      icon: FaMedium,
    }, 
    { 
      nameLink: 'Email Me',
      link: "mailto:ingridsanchesp@gmail.com",
      icon: BiLogoGmail,
    },
    { 
      nameLink: 'Drinbble',
      link: 'https://dribbble.com/IngriDiz',
      icon: IoLogoDribbble,
    },
  ] 

  return (
    <div className="md:h-screen ml-4 sm:w-32 flex md:flex-col items-center md:justify-center md:fixed md:z-40 ">
      <ul className=" flex md:flex-col  gap-2 md:gap-4">
        {externalLinks.map(( link, index)=>(
          <li key={index} className={styleLi}>
            <a href={link.link} target="_blank" rel="noopener noreferrer" className={styleA} aria-label={`Access my ${link.nameLink} using this link`}>
              <span>
                <link.icon 
                  size={18} 
                  className="hover:animate-wiggle-more"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;