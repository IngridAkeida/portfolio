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
      <h4 className="text-xl mt-2 mb-1">Softs</h4>
      <ul className="flex flex-wrap justify-center md:justify-start gap-4">
        {abilities.map((ability, index) => (
          <li key={index} className="flex flex-col items-center text-center justify-center md:justify-start mx-2 my-2 w-16">
              <ability.icon size={30}/>
              <p className="mt-2 text-sm">{ability.skill}</p>
          </li>
        ))}     
      </ul>
    </div>
  );
}

export default AbilitiesList;