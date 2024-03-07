const Menus: React.FC = () => {

  const munuTailwind = 'block py-2 px-3 text-gray-100 dark:hover:text-cyan-950 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:bg-cyan-900 md:p-2 dark:text-gray-100 dark:hover:text-gray-100';

  const menus = [
    {
      menuName: 'About',
      menuStyle: munuTailwind,
      menuHref: 'about'
    },
    {
      menuName: 'Skill',
      menuStyle: munuTailwind,
      menuHref: 'skils'
    },
    {
      menuName: 'Projects',
      menuStyle: munuTailwind,
      menuHref: 'projects'
    },
    {
      menuName: 'Hire me',
      menuStyle: munuTailwind,
      menuHref: 'hireMe'
    },

  ]

  return(
      <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        {menus.map((menu, index)=>(
          <li key={index} className="hover:bg-cyan-800 hover:animate-wiggle animate-fill-forwards  dark:hover:bg-[#cededc] rounded-md">
            <a href={menu.menuHref} className={menu.menuStyle}>{menu.menuName}</a>
          </li>
        ))}
      </ul>

  )
}

export default Menus; 