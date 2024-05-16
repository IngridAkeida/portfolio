"use client"
import { CiDesktopMouse2 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import Intro from "@/components/main/Intro";
import Overview from "@/components/main/Overview";
import TechnologiesList from "@/components/main/TechnologiesList";
import technologies from "@/data/technologies";
import AbilitiesList from "@/components/main/AbilitiesList";
import abilities from "@/data/abilities";
import CardProjects from "@/components/main/CardProjects";

import { useRef, useCallback } from "react";


const Main: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = useCallback(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="
    px-4 -mt-2 mx-auto min-h-screen gap-4
    md:grid md:grid-cols-6">
      <div></div>
      <div className="col-span-5">
        <div
          id="page1"
          className="container h-screen flex flex-col gap-2 md:gap-4 justify-center items-center"
        >
          <Intro />
          <Overview />
          <div className="absolute bottom-0">
            <button
              className="animate-bounce mt-4 bg-cyan-950 hover:bg-cyan-700 text-gray-100 py-2 px-4 rounded-md"
              onClick={scrollToProjects}
            >
              <span className="flex items-center gap-2">
                <CiDesktopMouse2 size={30} />
                Scroll to Projects
                <IoIosArrowDown size={30} />
              </span>
            </button>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 justify-center items-center"
        >
          <div id="about" className="container 
          scroll-mt-96 md:scroll-mt-16">
            <h3 className=" text-2xl font-bold mt-2 mb-1">About me:</h3>
            <article className="text-md dark:text-cyan-100">
              I am a front-end developer, with a background in UX/UI and a
              passion for technology. I am a creative and curious person, always
              looking for new challenges and opportunities to learn. I am a team
              player, with a strong sense of empathy and a passion for creating
              user-friendly and accessible digital solutions. I am a student at
              Hyper Island, working as a freelancer in the digital universe. I
              am currently diving head-first into React and TypeScript, but hey,
              I am ready for any project! After all, learning is my game. Oh,
              and did I mention? I love cats and horror movies. So expect some
              spooky surprises in my projects! 😉
            </article>
          </div>
          <div id="skills" className="container scroll-mt-96 md:scroll-mt-16">
            <h3 className="text-2xl font-bold mt-2 mb-1">Skills:</h3>
            <article className="text-md dark:text-cyan-100">
              My journey began with a fascination for UI and UX, but soon, I
              found my passion for programming. ReactJS has become an integral
              part of my daily workflow, and {`I've`} been delving into
              TypeScript to enhance my development skills. Recently, {`I've`}{" "}
              also ventured into the realms of SEO and accessibility,
              recognizing their profound impact on user experience. After all,
              what purpose does a website serve if it {`doesn't`} cater to the
              needs and desires of its users, right? so that is my main goal always.
            </article>
            <TechnologiesList technologies={technologies} />
            <AbilitiesList abilities={abilities} />
          </div>
          <div id="projects" className="container scroll-mt-96 md:scroll-mt-16" ref={projectsRef}>
            <h3 className="text-2xl font-bold mt-2 mb-1">My Projects:</h3>
            <CardProjects Projects={[]} />
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Main;
