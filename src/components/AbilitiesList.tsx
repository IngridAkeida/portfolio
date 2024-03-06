import { IconType } from "react-icons";

interface AbilitiesProps {
  abilities: {
    icon: IconType;
    skill: string;
  }[];
}

const AbilitiesList : React.FC<AbilitiesProps> = ({ abilities }) => {
  
  return (
    <ul className="flex justify-left">
      {abilities.map((ability, index) => (
        <li key={index}>
            <ability.icon size={60}/>
            <p>{ability.skill}</p>
         
        </li>
      ))}     
    </ul>
  );
}

export default AbilitiesList;