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
    <div className="relative flex overflow-hidden w-72 md:w-full">
      <h4 className="text-xl mt-2 mb-1">Hards</h4>
      <ul className="flex py-12 mt-4 animate-marqueeSm md:animate-marqueeMd xl:animate-marqueeXl whitespace-nowrap gap-2">
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="hover:animate-bounce hover:border hover:border-zinc-950 w-16 text-wrap text-center"
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
      <ul className="ml-20 mt-4 flex absolute top-0 py-12 animate-marquee2Sm md:animate-marquee2Md xl:animate-marquee2Xl whitespace-nowrap gap-2">
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="hover:animate-bounce hover:border hover:border-zinc-950 w-16 text-wrap text-center"
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
  );
};

export default TechnologiesList;
