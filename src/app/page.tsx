"use client"
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

import { CiDesktopMouse2 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const App: React.FC = (darkMode) => {
  

  return (      
    <div className={`bg-white dark:bg-gray-800 transition-colors duration-500 ${darkMode && 'dark'} p-6 md:p-0 flex flex-col mx-auto lg:max-w-5xl`}>
      <header>
        <Navbar /> 
        <Sidebar />
      </header>
      <main className="container mx-auto py-8 px-4 min-h-screen p-24 grid grid-cols-4 gap-4">  
      <div className='p-4'></div>
      <div className='p-4 col-span-3'>
        <div className=' h-screen flex flex-col gap-4 justify-center items-center'>
            <div className='flex items-center gap-4'>
              <div>
                <h1 className="text-2xl font-bold">Hi, {`I'm`} Ingrid Sanches</h1>
                <h2 className="text-md font-bold">Front End Developer</h2>
                <p>{`I'm`} a business grad {`who's`} taken a detour into the dazzling world of Tech ⭐️!</p>
                <p>Yes, from processing, performance, usability, accessibility and line coding.</p>
              </div>
              <div className=''>
                <Image src="/assets/bio-image.png" alt="Ingrid Sanches Perfil image"
                className='rounded-full' 
                width={200} height={200}/>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-28'> <CiDesktopMouse2 /> Scroll down <IoIosArrowDown /></div>
            
            
        </div>
        <div className='h-screen flex flex-col gap-4 justify-center items-center'>
          <div>
            <h3>about me:</h3>
            <article className="text-md">
            
            Yes, from processing, performance, usability, accessibility and line coding, I am now a student at Hyper Island, working as a freelancer in the digital universe. {`I'm`} currently diving head first into React and TypeScript 🌱, but hey, {`I'm`} ready for any project! After all, learning is my game 💓. Oh, and did I mention? I love cats and horror movies 🐱👻. So expect some spooky surprises in my projects! 😉
            </article>
          </div>
          <div>
            <h3>Skills:</h3>
            <p className="text-lg mb-8">
            </p>
          </div>
        </div>
        
        <div className='h-screen flex flex-col gap-4 justify-center items-center'>
          <h3>Projects:</h3>
          <p className="text-lg mb-8">
          </p>
        </div>
      </div>
        
      </main>
      <footer className="py-4 px-8 text-center text-gray-600 dark:text-gray-400">
        <div>
          <h3>Contact me:</h3>
          <p className="text-lg mb-8">
          </p>
        </div>
        <div>
          © {new Date().getFullYear()} Ingrid Sanches. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
