import { IconType } from "react-icons";

interface TechnologiesProps {
  technologies: {
    name: string;
    image: IconType;
    link: string;
  }[];
}

const TechnologiesList: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div>
      <h4 className="text-xl mt-2 mb-1">Hards</h4>
      <div className="flex flex-col md:relative md:overflow-x-hidden">
        <ul className="flex flex-wrap mt-4 md:flex-nowrap md:animate-marquee gap-2 py-12 whitespace-nowrap">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="hover:animate-bounce hover:border-zinc-950 w-16 text-wrap text-center"
            >
              <a
                href={technology.link}
                className="flex flex-col items-center justify-center md:justify-start mx-2 my-2 w-16 text-wrap text-center"
                target="_blank"
                aria-label={technology.name}
                rel="noreferrer"
              >
                <technology.image size={30} />
                <p className="mt-2 text-sm">{technology.name}</p>
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex mt-4 ml-16 gap-2 absolute top-0 py-12 md:animate-marquee2 whitespace-nowrap">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="hover:animate-bounce hover:border-zinc-950 w-16 text-wrap text-center"
            >
              <a
                href={technology.link}
                className="flex flex-col items-center justify-center md:justify-start mx-2 my-2"
                target="_blank"
                aria-label={technology.name}
                rel="noreferrer"
              >
                <technology.image size={30} />
                <p className="mt-2 text-sm">{technology.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnologiesList;
