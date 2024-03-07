const Menus: React.FC = () => {

  const munuTailwind = 'block py-2 px-3 text-gray-100 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:bg-cyan-900 md:p-2 dark:text-gray-100 dark:hover:text-gray-100';

  const menus = [
    {
      menuName: 'Home',
      menuStyle: munuTailwind,
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
      <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        {menus.map((menu, index)=>(
          <li key={index}>
            <a href={menu.menuHref} className={menu.menuStyle}>{menu.menuName}</a>
          </li>
        ))}
      </ul>

  )
}

export default Menus; 