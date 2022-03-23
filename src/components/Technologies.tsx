import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { GrReactjs, GrGraphQl } from "react-icons/gr";
import {
  SiTypescript,
  SiMaterialui,
  SiApollographql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiUbuntu,
} from "react-icons/si";
import { ReactNode } from "react";

type TechnologiesList = {
  icons: ReactNode;
  description: string;
};

const technologies: TechnologiesList[] = [
  {
    icons: <FaHtml5 className="text-7xl text-orange-600" />,
    description: "HTML",
  },
  {
    icons: <FaCss3 className="text-7xl text-blue-600" />,
    description: "CSS",
  },
  {
    icons: (
      <DiJavascript className="text-7xl  text-yellow-500 dark:text-yellow-300" />
    ),
    description: "Javascript",
  },
  {
    icons: <SiTypescript className="text-7xl text-blue-600" />,
    description: "TypeScript",
  },
  {
    icons: <FaNodeJs className="text-7xl text-green-500" />,
    description: "NodeJS",
  },
  {
    icons: <GrReactjs className="text-7xl text-blue-600" />,
    description: "ReactJS",
  },
  {
    icons: <img src="/svg/Nextjs-logo.svg" />,
    description: "NextJS",
  },
  {
    icons: <GrGraphQl className="text-7xl text-pink-600" />,
    description: "GraphQL",
  },
  {
    icons: <SiApollographql className="text-7xl text-purple-600" />,
    description: "Apollo",
  },
  {
    icons: <SiPostgresql className="text-7xl text-blue-600" />,
    description: "PostgresQL",
  },
  {
    icons: <SiMongodb className="text-7xl text-green-500" />,
    description: "MongoDB",
  },
  {
    icons: <SiMaterialui className="text-7xl text-sky-500" />,
    description: "MaterialUI",
  },
  {
    icons: <SiDocker className="text-7xl text-sky-500" />,
    description: "Docker",
  },
  {
    icons: <SiKubernetes className="text-7xl text-sky-500" />,
    description: "K8s",
  },
  {
    icons: <img src="/images/pixi.png" className="w-20" />,
    description: "PixiJS",
  },
  {
    icons: <SiUbuntu className="text-7xl text-orange-500" />,
    description: "Ubuntu",
  },
];

const Technologies = () => {
  return (
    <div className="mt-6">
      <h5 className="mb-1 text-2xl font-bold dark:text-white">
        Technologies and frameworks that I mainly use
      </h5>
      <div className="around my-2 flex max-w-xl flex-wrap justify-around gap-6">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center"
            key={technology.description}
          >
            <div>{technology.icons}</div>
            <div className="align-middle dark:text-white">
              {technology.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
