import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-1/4 relative group">
      <div className="h-full w-full flex justify-center group-hover:border-2 group-hover:border-secondary group-hover:rounded-md">
        <img
          src={project.img}
          className="group-hover:opacity-10 h-full block transition ease-linear"
          alt={project.name}
        />
      </div>
      <div className="absolute h-full w-full transition ease-linear top-24 left-10 opacity-0 group-hover:opacity-90">
        <div className="text-2xl h-1/4 text-themeWhite">{project.name}</div>
        <ul className="flex gap-2 flex-wrap">
          {project.stack.map((skill, index) => (
            <li key={index}>
              <img src={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
