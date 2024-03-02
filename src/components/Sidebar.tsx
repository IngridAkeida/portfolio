import { FaMedium } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 h-screen w-52 flex flex-col items-center justify-center fixed ">
      <ul className=" flex flex-col gap-9">
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-6">
            <i className="fab fa-linkedin-in"><SlSocialLinkedin size={32}/></i>
          </a>
        </li>
        <li>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-6">
            <i className="fab fa-medium-m"><FaMedium size={32}/></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-github"><FiGithub size={32} /></i>
          </a>
        </li>
      </ul>
      
      
      
    </div>
  );
};

export default Sidebar;