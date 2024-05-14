import Image from "next/legacy/image";
import { IconType } from "react-icons";
import { IoIosPeople } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";

interface ProjectProps{
    Projects: {
      nameProject: string;
      imgProject:  string;
      siteProject: string;
      repositorieProject: string;
      aboutProject: string;
      buildProject: IconType;
      technologies: string[];
    }[];
}

const CardProjects: React.FC <ProjectProps> = () => {
  const styleLink =
    "inline-flex items-center justify-center px-3 py-2 text-sm w-24 font-medium text-center bg-cyan-950 hover:bg-cyan-700 text-gray-100 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800";

  const Projects = [
    {
      nameProject: "HyperFlix",
      imgProject: "/assets/projects/1.png",
      siteProject: "https://react-hyperflix-movies-hub.netlify.app/",
      repositorieProject:
        "https://github.com/IngridAkeida/react-hyperflix-movies-IngridFork",
      aboutProject:
        `I dedicated myself to mastering ReactJS and TailwindCSS, advancing to complex levels and efficiently utilizing APIs to integrate data into applications.`,
      buildProject: IoIosPeople,
      technologies: ['#reactJs', '#talwindcss', '#react-icons', '#api'],
    },
    {
      nameProject: "Pet Finder",
      imgProject: "/assets/projects/3.png",
      siteProject: "https://petfinder-ingridsanches.netlify.app/",
      repositorieProject: "https://github.com/IngridAkeida/petfinder",
      aboutProject:
        `Pet Finder, a passion project, prioritizes accessibility and SEO, promoting pet adoption with features like tags, attributes, and SEO best practices.`,
      buildProject: IoIosPeople,
      technologies: ["#reactJs", "#css"],
    },
    {
      nameProject: "Age Calculator",
      imgProject: "/assets/projects/2.png",
      siteProject: "https://agecalculator-2023.netlify.app/",
      repositorieProject: "https://github.com/IngridAkeida/age-calculator-app-main",
      aboutProject:
        `In this project I prioritized seamless validation and responsive design for optimal user experience. This project honed my skills and taught me the value of attention to detail and perseverance.`,
      buildProject: MdPerson2,
      technologies: ["#reactJs", "#css"],
    },
    {
      nameProject: "Calculator",
      imgProject: "/assets/projects/4.png",
      siteProject: "https://calcz.netlify.app/",
      repositorieProject: "https://github.com/IngridAkeida/calculadora",
      aboutProject: `Building Calcz was a discovery journey in JavaScript, HTML, and CSS, navigating challenges, embracing failures, and celebrating victories. It uncovered my potential, honed skills, and brought joy in creation.`,
      buildProject: MdPerson2,
      technologies: ["#reactJs", "#css"],
    },
    {
      nameProject: 'Mentatt',
      imgProject: '/assets/projects/5.png',
      siteProject: 'https://mentatt.vercel.app/',
      repositorieProject:'https://github.com/IngridAkeida',
      aboutProject: `Mentatt expands to Eastern Africa with a user-centric webpage featuring services, success stories, and Imigongo art. Through interviews, prototypes, and linguistic inclusivity, we ensure an engaging and culturally rich experience for all users.`,
      buildProject: IoIosPeople,
      technologies: [ '#reactJs', '#talwindcss', '#nextjs', '#i18next', '#react-icons', '#next.js', '#storybook', '#jest.js', '#i18next', '#i18nexus', '#trello', '#figma']
    },
    // {
    //   nameProject: 'Find My GitHub',
    //   imgProject: '/assets/projects/5.png',
    //   siteProject: '',
    //   repositorieProject:'',
    //   aboutProject:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   buildProject: MdPerson2,
    //   technologies: [ 'ReactJs', 'css']
    // }
  ];

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {Projects.map((project, index) => (
        <li
          key={index}
          className="flex gap-4 bg-[#709994] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 h-auto max-w-96 rounded-lg"
        >
          <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative text-center h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="abosulte inset-0 text-white">
                <h2 className="my-2 text-2xl font-bold tracking-tight">{project.nameProject}</h2>
                <Image
                  src={project.imgProject}
                  alt={`screenshot of the project ${project.nameProject}`}
                  width={250}
                  height={200}
                  objectFit="contain"
                  layout="responsive"
                  className="h-full w-full object-contain shadow-xl shadow-black/40"
                />
                <div className="p-2">{project.technologies.join(' ')}</div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#709994] dark:bg-gray-800 px-8 text-center text-slate-200 dark:text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] -mt-2">
                <div className="flex mt-2 flex-col items-center justify-center text-white">
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.nameProject}</h2>
                  <project.buildProject />
                  <p className="mb-10 font-normal">{project.aboutProject}</p>
                  <div className="flex absolute bottom-4 gap-4">
                    <a
                      href={project.siteProject}
                      className={styleLink}
                      target="_blank"
                    >
                      Site
                    </a>
                    <a
                      href={project.repositorieProject}
                      className={styleLink}
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardProjects;
