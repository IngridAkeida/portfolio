import Menus from '../Menus';


const Footer: React.FC = () => {  
  return(
      <footer className="py-4 px-8 text-center text-cyan-950 dark:text-gray-400 bg-cover bg-repeat-x bg-center bg-image">
        <div className=" bg-black p-4 bg-opacity-80 container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <nav className="mb-4 lg:mb-0">
            <ul className="flex flex-wrap justify-center lg:justify-start space-x-6">
              <Menus />
            </ul>
          </nav>
          <div className='text-[#cededc] rounded-md'>
           © {new Date().getFullYear()} Ingrid Sanches. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer;