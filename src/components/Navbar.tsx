const btnDropdownStyle = "inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-cyan-900 dark:focus:ring-gray-600"

import { useState } from 'react';
import BtnDarkMode from "./BtnDarkMode";
import Logo from './Logo';
import Menus from './Menus';
import Sidebar from './Sidebar';

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
    <nav className="fixed w-screen top-0 z-50 md:p-0 mx-auto lg:max-w-7xl  ">
      <div className="bg-cyan-950 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">      
          <Logo />
          <div className='flex justify-end items-center'>
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                type="button" 
                className={btnDropdownStyle}
                data-collapse-toggle="navbar-default"  
                aria-controls="navbar-default" 
                aria-expanded="false">

                <svg 
                  className={`${isOpen ? 'hidden' : 'block'} h-4 w-4`} stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg 
                  className={`${isOpen ? 'block' : 'hidden'} h-4 w-4`} 
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
      <div className='bg-gray-100 md:hidden flex items-center justify-between'>
        <Sidebar/>
        <BtnDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </div>
      <div className="md:flex md:mr-2 md:justify-end md:items-center hidden">
        <BtnDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </div>
    </nav>
  );
};

export default NavBar;

