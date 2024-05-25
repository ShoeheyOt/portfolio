import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border border-white w-1/4">
      <div className="opacity-0 hover:opacity-80 h-full w-full transition ease-linear mt-28 ml-4">
        <div className="text-2xl h-1/4">{project.name}</div>
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
