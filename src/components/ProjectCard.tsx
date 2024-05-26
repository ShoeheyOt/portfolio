import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-1/4 relative group">
      <img
        src="/projects/pomodoro2.png"
        className="group-hover:opacity-10 block h-auto w-full transition ease-linear"
      />
      <div className="absolute h-full w-full transition ease-linear top-24 group-hover:opacity-90">
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
