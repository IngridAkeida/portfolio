import Image from "next/image";

interface TechnologiesProps {
  technologies: {
    name: string;
    image: string;
    link: string;
  }[];
}

const TechnologiesList : React.FC<TechnologiesProps> = ({ technologies }) => {
  
  return (
    <ul className="flex justify-left">
      {technologies.map((technology, index) => (
        <li key={index}>
          <a href={technology.link} target="_blank" aria-label={technology.name} rel="noreferrer">
            <Image src={technology.image} alt={technology.name} width={50} 
            height={50}/>
          </a>
        </li>
      ))}     
    </ul>
  );
}

export default TechnologiesList;

