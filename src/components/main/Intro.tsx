import Image from "next/legacy/image";
import BtnContratMe from "@/components/ui-components/Btn-ContratMe";
import TypingAnimation from "../ui-components/TypingAnimation";
const Intro: React.FC = () => {
  return (
    <div className="
    mr-2 flex flex-col 
    md:grid md:grid-cols-4 md:w-full md:gap-4 md:items-center md:justify-between md:ml-2
    xl:grid-cols-5 xl:ml-4 xl:w-3/4
    ">
      <div className="md:col-span-2 xl:col-span-3">
          <h1 className="text-2xl font-bold flex flex-wrap">
            Hi,<div className="animate-wiggle animate-infinite">👋🏻</div>   
            <TypingAnimation text={`I'm Ingrid Sanches`} /> 
          </h1>
          
          <h2 className="text-md font-bold">Front End Developer</h2>
          <div className="hidden md:block mt-4">
            <BtnContratMe />
          </div>
        </div>
      <div className="flex items-center justify-center md:col-span-2 xl:col-span-2 md:mr-4 xl:ml-4 xl:mr-0 xl:justify-end">
        <div className="hover:animate-wiggle relative overflow-hidden my-2">
          <Image
            className="animate-once rounded-full shadow-md"
            src="/assets/bio-image.webp"
            alt="Ingrid Sanches Perfil image"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <BtnContratMe />
      </div>
    </div>
  );
};

export default Intro;
