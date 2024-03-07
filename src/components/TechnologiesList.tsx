import { IconType } from "react-icons";

interface TechnologiesProps {
  technologies: {
    name: string;
    image: IconType;
    link: string;
  }[];
}

const TechnologiesList : React.FC<TechnologiesProps> = ({ technologies }) => {
  
  return (
    <div className="">
      <h4 className="text-xl font-bold mt-2 mb-1">Hard Skills</h4>
      <ul className="flex flex-wrap justify-center md:justify-start">
        {technologies.map((technology, index) => (
          <li key={index} className="hover:animate-bounce hover:border hover:border-zinc-950">
            <a href={technology.link} className="flex flex-col items-center justify-center md:justify-start mx-2 my-2" target="_blank" aria-label={technology.name} rel="noreferrer">
              <technology.image size={30}/>
              <p>{technology.name}</p>
            </a>
          </li>
        ))}     
      </ul>
    </div>
  );
}

export default TechnologiesList;

