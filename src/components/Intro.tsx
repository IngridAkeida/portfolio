import Image from "next/legacy/image";
import BtnContratMe from "./Btn-ContratMe";

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 xl:grid-cols-6 md:ml-2 md:w-auto md:gap-40 md:items-center md:justify-between xl:mr-96">
      <div className="md:col-span-2 xl:col-span-3">
        <h1 className="text-2xl font-bold">Hi,👋🏻 {`I'm`} Ingrid Sanches</h1>
        <h2 className="text-md font-bold">Front End Developer</h2>
        <div className="hidden md:block">
          <BtnContratMe/>
        </div>
      </div>
      <div className='flex items-center justify-center md:col-span-2 xl:col-span-3 md:mr-4 xl:ml-4 xl:mr-0'>
        <div className="relative rounded-full overflow-hidden my-2">
          <Image 
            src="/assets/bio-image.png" 
            alt="Ingrid Sanches Perfil image"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <BtnContratMe/>
      </div>
    </div>
  );
};

export default Intro;




