import Image from "next/image";
import { IoIosPeople } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";



const CardProjects: React.FC = () => {

  const styleLink = 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';


  const CardProjects = [
    {
      nameProject: 'example',
      imgProject: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'example',
      imgProject: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'example',
      imgProject: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'example',
      imgProject: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'example',
      imgProject: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'loremmmmmmmm',
      buildProject: 'alone',
      technologies: [ 'ReactJs', 'css']
    }
  ]


  return (
    <ul className="flex gap-4">
      {CardProjects.map((project, index) => (
        <li key={index} className="flex gap-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
          <div  className="relative">
            <div className="rounded-t-lg overflow-hidden">
              <Image
                src={project.imgProject}
                alt=""
                layout="responsive"
                width={400}
                height={200}
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






