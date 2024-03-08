const Menus: React.FC = () => {

  const munuTailwind = 'block py-2 px-3 text-gray-100  md:border-0 md:p-2 dark:hover:text-cyan-950 hover:bg-cyan-800  dark:hover:bg-[#cededc] rounded-md';

  const menus = [
    {
      menuName: 'About',
      menuStyle: munuTailwind,
      menuHref: '#about'
    },
    {
      menuName: 'Skill',
      menuStyle: munuTailwind,
      menuHref: '#skills'
    },
    {
      menuName: 'Projects',
      menuStyle: munuTailwind,
      menuHref: '#projects'
    },
    {
      menuName: 'Email Me 📧',
      menuStyle: munuTailwind,
      menuHref: 'mailto:ingridsanchesp@gmail.com',
      menuRedirect: '_blank',
    },

  ]

  return(
      <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        {menus.map((menu, index)=>(
          <li key={index} className="md:hover:animate-wiggle animate-fill-forwards">
            <a href={menu.menuHref} className={menu.menuStyle} target={menu.menuRedirect}>{menu.menuName}</a>
          </li>
        ))}
      </ul>

  )
}

export default Menus; 