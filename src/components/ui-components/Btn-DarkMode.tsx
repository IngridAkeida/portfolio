import { MdDarkMode } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'

interface BtnDarkModeProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const BtnDarkMode: React.FC<BtnDarkModeProps> = ({ toggleDarkMode, darkMode }) => {  
  return(
    <button 
      id="theme-toggle"
      type="button"
      className="md:hover:animate-bounce text-sm px-4 py-2 m-4 mr-6 rounded-md border-cyan-500 md:border-2
      bg-cyan-950 text-blue-100 hover:bg-cyan-800 
      dark:bg-cyan-700 dark:text-yellow-500 dark:hover:bg-cyan-600
      focus:outline-none focus:ring-2 focus:ring-blue-400" 
      onClick={toggleDarkMode}>
        {darkMode ? <MdLightMode/> : <MdDarkMode/> }
    </button>
  )
}

export default BtnDarkMode;