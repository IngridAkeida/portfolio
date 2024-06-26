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
    <>
      <h4 className="text-xl mt-2 mb-1">Hard Skills</h4>
      <div className="flex flex-col">
        <ul className="flex flex-wrap justify-start gap-1 md:gap-4">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="sm:hover:animate-jump hover:border-transparent w-22 text-wrap text-center dark:hover:border-cyan-500 border-2 border-transparent dark:hover:animate-borderAnimation rounded-xl"
            >
              <a
                href={technology.link}
                className="flex flex-col items-center justify-center mx-2 my-2 w-16 text-wrap text-center"
                target="_blank"
                aria-label={technology.name}
                rel="noreferrer"
              >
                <technology.image size={30} className="dark:text-cyan-100" />
                <p className="mt-2 text-sm dark:text-cyan-100">{technology.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechnologiesList;
