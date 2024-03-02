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
      className="text-sm px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" 
      onClick={toggleDarkMode}>
        {darkMode ? <MdLightMode/> : <MdDarkMode/> }
    </button>
  )
}

export default BtnDarkMode;