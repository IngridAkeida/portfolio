import { IconType } from "react-icons";

interface AbilitiesProps {
  abilities: {
    icon: IconType;
    skill: string;
  }[];
}

const AbilitiesList : React.FC<AbilitiesProps> = ({ abilities }) => {
  
  return (
    <>
      <h4 className="text-xl mt-2 mb-1">Softs Skills</h4>
      <div className="flex flex-col">
        <ul className="flex flex-wrap justify-start gap-1 md:gap-4">
          {abilities.map((ability, index) => (
            <li key={index} className="sm:hover:animate-jump flex flex-col items-center text-center justify-center mx-2 my-2 w-16">
                <ability.icon size={30}/>
                <p className="mt-2 text-sm">{ability.skill}</p>
            </li>
          ))}     
        </ul>
      </div>
    </>
  );
}

export default AbilitiesList;