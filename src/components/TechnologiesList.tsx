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
    <ul className="flex justify-left">
      {technologies.map((technology, index) => (
        <li key={index}>
          <a href={technology.link} target="_blank" aria-label={technology.name} rel="noreferrer">
            <technology.image size={60}/>
            <p>{technology.name}</p>
          </a>
        </li>
      ))}     
    </ul>
  );
}

export default TechnologiesList;

