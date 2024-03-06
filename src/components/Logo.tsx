import { IoLogoOctocat } from "react-icons/io";

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="flex text-cyan-900 dark:text-gray-100 bg-gray-100 dark:bg-cyan-900 text-md font-semibold whitespace-nowrap p-2 rounded-md text-xl">
        iS <IoLogoOctocat/>
      </span>
    </a>
  );
};

export default Logo;