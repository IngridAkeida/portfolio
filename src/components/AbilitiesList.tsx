import { IconType } from "react-icons";

interface AbilitiesProps {
  abilities: {
    icon: IconType;
    skill: string;
  }[];
}

const AbilitiesList : React.FC<AbilitiesProps> = ({ abilities }) => {
  
  return (
    <div>
      <h4 className="text-xl font-bold mt-2 mb-1">Soft Skills</h4>
      <ul className="flex flex-wrap justify-center md:justify-start">
        {abilities.map((ability, index) => (
          <li key={index} className="flex flex-col items-center justify-center md:justify-start mx-2 my-2">
              <ability.icon size={30}/>
              <p className="mt-2">{ability.skill}</p>
          </li>
        ))}     
      </ul>
    </div>
  );
}

export default AbilitiesList;