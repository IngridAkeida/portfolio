
const btnDropdownStyle = "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"

import { useState } from 'react';
import BtnDarkMode from "./BtnDarkMode";
import Logo from './Logo';
import Menus from './Menus';

const NavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cyan-950 fixed top-0 inset-x-0 z-50 p-2 md:p-0 gap-[5rem] sm:gap-[8rem] mx-auto lg:max-w-5xl">
      <div className="">
        <div className="flex items-center justify-between h-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">      
          <Logo />
          <div className='flex justify-end items-center'>
            <div className='md:hidden'>
              <BtnDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            </div>
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                type="button" 
                className={btnDropdownStyle}
                data-collapse-toggle="navbar-default"  
                aria-controls="navbar-default" 
                aria-expanded="false">

                <svg 
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg 
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} 
                  stroke="currentColor" 
                  fill="none" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <Menus/>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Menus/>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-end md:items-center hidden">
        <BtnDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </div>
    </nav>
  );
};

export default NavBar;

