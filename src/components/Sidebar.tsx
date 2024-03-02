import { FaMedium } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 h-screen w-52  top-0 left-0 flex flex-col items-center justify-center">
      <ul>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-6">
            <i className="fab fa-linkedin-in"><SlSocialLinkedin /></i>
          </a>
        </li>
        <li>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-6">
            <i className="fab fa-medium-m"><FaMedium /></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-github"><FiGithub /></i>
          </a>
        </li>
      </ul>
      
      
      
    </div>
  );
};

export default Sidebar;