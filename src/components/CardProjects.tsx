import Image from "next/image";
import { IoIosPeople } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";



const CardProjects: React.FC = () => {

  const styleLink = 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';


  const CardProjects = [
    {
      nameProject: 'HyperFlix',
      imgProject: '',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Pet Finder',
      imgProject: '',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Age Calculator',
      imgProject: '',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Calculator',
      imgProject: '',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Find My GitHub',
      imgProject: '',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    }
  ]


  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {CardProjects.map((project, index) => (
        <li key={index} className="flex gap-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 h-auto max-w-full rounded-lg">

          <div  className="relative">
            <div className="rounded-t-lg overflow-hidden">
              <Image
                src={project.imgProject}
                alt=""
                width={200}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.nameProject}</h5>
                <project.buildProject />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.aboutProject}</p>
              <div>
                <a href={project.siteProject} className={styleLink}>Site</a>
                <a href={project.repositorieProject} className={styleLink}>GitHub</a>
              </div>
            </div>
          </div>

        </li>
      ))}
    </ul>
    
  );
}

export default CardProjects;












