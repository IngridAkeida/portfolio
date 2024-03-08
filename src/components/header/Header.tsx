import NavBar from "../Navbar";
import Sidebar from "../Sidebar";

const Header: React.FC = () => {  
  return(
    <header aria-label="Main Navigation">
      <NavBar /> 
      <div className='md:block'>
        <Sidebar /> 
      </div>
    </header>
  )
}

export default Header;