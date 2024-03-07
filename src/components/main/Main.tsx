import { CiDesktopMouse2 } from "react-icons/ci";
import Intro from "../Intro";
import Overview from "../Overview";
import { IoIosArrowDown } from "react-icons/io";
import TechnologiesList from "../TechnologiesList";
import technologies from "../data/technologies";
import AbilitiesList from "../AbilitiesList";
import abilities from "../data/abilities";
import CardProjects from "../CardProjects";

const Main: React.FC = () => {  

  function scrollToProjects() {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return(
    <main className="px-4 mt-8 mx-auto min-h-screen md:grid md:grid-cols-6 gap-4">  
      <div className='md:visible'></div>
      <div className='col-span-5'>
        <div id="page1" className='container h-screen flex flex-col gap-4 justify-center items-center bg-cover bg-no-repeat bg-center bg-image'>
          <div className="p-2 bg-cyan-50 bg-opacity-50 rounded-md">
            <Intro/>
            <Overview/>
          </div>
          
          <div className="absolute bottom-4">
            <button 
              className='animate-bounce mt-4 bg-cyan-300 py-2 px-4 rounded-md'
              onClick={scrollToProjects}>
              <a href="#projects" className='flex items-center gap-2'>   
                <CiDesktopMouse2 size={30}/> 
                Scroll to Projects 
                <IoIosArrowDown size={30}/>
              </a>
            </button> 
          </div>
                   
        </div>

        <div className='containerflex flex-col gap-4 justify-center items-center'>
          <div id='page2' className='scroll-m-8'>
            <h3 className=" text-2xl font-bold mt-2 mb-1">About me:</h3>
            <article className="text-md">
              I am a front-end developer, with a background in UX/UI and a passion for technology. I am a creative and curious person, always looking for new challenges and opportunities to learn. I am a team player, with a strong sense of empathy and a passion for creating user-friendly and accessible digital solutions. I am a student at Hyper Island, working as a freelancer in the digital universe. I am currently diving head first into React and TypeScript, but hey, I am ready for any project! After all, learning is my game. Oh, and did I mention? I love cats and horror movies. So expect some spooky surprises in my projects! 😉
            </article>
          </div>
          <div>
          <h3 className="text-2xl font-bold mt-2 mb-1">Skills:</h3>
          <article className="text-md">
          My journey began with a fascination for UI and UX, but soon, I found my passion for programming. ReactJS has become an integral part of my daily workflow, and {`I've`} been delving into TypeScript to enhance my development skills. Recently, {`I've`} also ventured into the realms of SEO and accessibility, recognizing their profound impact on user experience. After all, what purpose does a website serve if it {`doesn't`} cater to the needs and desires of its users? Join me as I share my journey and the valuable lessons I continue to learn along the way.
          </article>
            <TechnologiesList technologies={technologies}/>
            <AbilitiesList abilities={abilities}/>
          </div>
        </div>
        
        <div id='projects' className='container flex flex-col justify-left'>
          <h3 className="text-2xl font-bold mb-2">Projects:</h3>
          <CardProjects/> 
        </div>
      </div>
    </main>
  )
}

export default Main;