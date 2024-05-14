const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse sm:hover:animate-shake hover:animate-infinite">
      <span className="flex text-cyan-900 bg-[#cededc] dark:text-gray-100 dark:bg-cyan-900 text-md font-semibold whitespace-nowrap p-2 rounded-md text-xl">
        {`iS`}
      </span>
    </a>
  );
};

export default Logo;