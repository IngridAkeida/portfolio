import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'

interface BtnDarkModeProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}


const BtnDarkMode: React.FC<BtnDarkModeProps> = ({ toggleDarkMode, darkMode }) => {  
  const [screenSize, setScreenSize] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('Small Screen');
      } else {
        setScreenSize('Large Screen');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const specifyId = screenSize === 'Small Screen' ? 'btn-dark-mode-small' : 'btn-dark-mode-large';

  return(
    <button 
      id={specifyId}
      type="button"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="md:hover:animate-bounce text-sm px-4 py-2 m-4 md:mr-6 rounded-md border-cyan-500 md:border-2
      bg-cyan-950 text-blue-100 hover:bg-cyan-800 
      dark:bg-cyan-700 dark:text-yellow-500 dark:hover:bg-cyan-600
      focus:outline-none focus:ring-2 focus:ring-blue-400" 
      onClick={toggleDarkMode}>
        {darkMode ? <MdLightMode/> : <MdDarkMode/> }
    </button>
  )
}

export default BtnDarkMode;