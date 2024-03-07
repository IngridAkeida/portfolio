const Footer: React.FC = () => {  
  return(
    <footer className="py-4 px-8 text-center text-gray-600 dark:text-gray-400 bg-cover bg-repeat-x bg-center bg-image">
        <div>
          <h3>Contact me:</h3>
          <p className="text-lg mb-8">
          </p>
        </div>
        <div>
          © {new Date().getFullYear()} Ingrid Sanches. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer;