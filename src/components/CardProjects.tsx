import Image from "next/legacy/image";
import { IoIosPeople } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";

const CardProjects: React.FC = () => {

  const styleLink = 'inline-flex items-center justify-center px-3 py-2 text-sm w-24 font-medium text-center bg-cyan-950 hover:bg-cyan-700 text-gray-100 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800';


  const CardProjects = [
    {
      nameProject: 'HyperFlix',
      imgProject: '/assets/projects/1.png',
      siteProject: 'https://react-hyperflix-movies-hub.netlify.app/',
      repositorieProject:'https://github.com/IngridAkeida/react-hyperflix-movies-IngridFork',
      aboutProject: 'I dedicated myself to embracing new experiences, which led to an enhanced proficiency in ReactJS, utilizing it at advanced levels of complexity, and gaining practical experience with TailwindCSS. They also recognized the significance of utilizing APIs efficiently, understanding how to retrieve and integrate data from APIs into applications effectively.',
      buildProject: IoIosPeople,
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Pet Finder',
      imgProject: '/assets/projects/3.png',
      siteProject: 'https://petfinder-ingridsanches.netlify.app/',
      repositorieProject:'https://github.com/IngridAkeida/petfinder',
      aboutProject: 'Pet Finder is a web development passion project driven by a love for animals. The team focused on creating a platform that promotes pet adoption while prioritizing accessibility and SEO. They implemented features such as tags, attributes, and color contrast optimization to ensure easy navigation for all users. Additionally, SEO best practices were integrated throughout, including metadata optimization and structured data markup.',
      buildProject: IoIosPeople,
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Age Calculator',
      imgProject: '/assets/projects/2.png',
      siteProject: 'https://agecalculator-2023.netlify.app/',
      repositorieProject:'',
      aboutProject:'Crafting an age calculator using JavaScript, CSS, and HTML was a journey of growth. I aimed for seamless validation and responsive design, ensuring an optimal user experience on any device. Through this project, I honed my skills and learned the importance of attention to detail and perseverance.',
      buildProject: MdPerson2,
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Calculator',
      imgProject: '/assets/projects/4.png',
      siteProject: 'https://calcz.netlify.app/',
      repositorieProject:'',
      aboutProject:`Building Calcz was a journey of discovery. Through JavaScript and Bootstrap, I learned to navigate challenges, embrace failures, and celebrate victories. Each line of code was a step forward, each bug a lesson learned. With Calcz, I ${`didn't`} just create a calculator—I uncovered my potential, honed my skills, and found joy in the process of creation.`,
      buildProject: MdPerson2,
      technologies: [ 'ReactJs', 'css']
    },
    {
      nameProject: 'Find My GitHub',
      imgProject: '/assets/projects/5.png',
      siteProject: '',
      repositorieProject:'',
      aboutProject:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut volutpat mauris. Nam facilisis ipsum eget urna congue, ac sodales nunc vulputate. Phasellus sit amet sapien at dui eleifend tincidunt. Nulla facilisi. Aenean auctor ipsum non risus vehicula, ac malesuada mi fermentum. Pellentesque euismod leo nec nulla bibendum, vel tristique felis facilisis. Suspendisse auctor enim vitae nunc posuere, vitae tempus mauris luctus.',
      buildProject: MdPerson2,
      technologies: [ 'ReactJs', 'css']
    }
  ]


  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CardProjects.map((project, index) => (
        <li key={index} className="flex gap-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 h-auto max-w-96 rounded-lg">

          <div  className="relative">
            <div className="rounded-t-lg overflow-hidden mt-4">
              <Image
                src={project.imgProject}
                alt={`screenshot of the project ${project.nameProject}`}
                width={250}
                height={200}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.nameProject}</h5>
                <project.buildProject />
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.aboutProject}</p>
              <div className="flex justify-between ">
                <a href={project.siteProject} className={styleLink} target="_blank">Site</a>
                <a href={project.repositorieProject} className={styleLink} target="_blank">GitHub</a>
              </div>
            </div>
          </div>

        </li>
      ))}
    </ul>
    
  );
}

export default CardProjects;












