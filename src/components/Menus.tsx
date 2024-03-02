const Menus: React.FC = () => {

  const munuTailwindHome = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-100 md:dark:text-blue-500";
  const munuTailwind = 'block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent';

  const menus = [
    {
      menuName: 'Home',
      menuStyle: munuTailwindHome,
      menuHref: '#'
    },
    {
      menuName: 'About',
      menuStyle: munuTailwind,
      menuHref: '#'
    },
    {
      menuName: 'Skill',
      menuStyle: munuTailwind,
      menuHref: '#'
    },
    {
      menuName: 'Projects',
      menuStyle: munuTailwind,
      menuHref: '#'
    },
    {
      menuName: 'Contact me',
      menuStyle: munuTailwind,
      menuHref: '#'
    },

  ]

  return(
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        {menus.map((menu, index)=>(
          <li key={index}>
            <a href={menu.menuHref} className={menu.menuStyle}>{menu.menuName}</a>
          </li>
        ))}
      </ul>

  )
}

export default Menus; 