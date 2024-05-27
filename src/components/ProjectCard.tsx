import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-1/3 2xl:w-1/5 relative group">
      <div className="h-full w-full flex justify-center group-hover:border-2 group-hover:border-secondary group-hover:rounded-md">
        <img
          src={project.img}
          className="group-hover:opacity-10 h-full block transition ease-linear"
          alt={project.name}
        />
      </div>
      <div className="absolute h-full w-full transition ease-linear top-4 left-2 md:top-12 md:left-4 lg:top-16 lg:left-6 xl:top-20 opacity-0 group-hover:opacity-90">
        <div className="text-lg md:text-xl lg:text-2xl h-1/4 text-themeWhite">
          {project.name}
        </div>
        <ul className="flex gap-2 flex-wrap">
          {project.stack.map((skill, index) => (
            <li key={index}>
              <img
                src={skill}
                className="w-6 h-6 md:w-11 md:h-11 lg:w-auto lg:h-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
