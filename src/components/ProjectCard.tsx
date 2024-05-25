import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border border-white w-1/4">
      <div>{project.name}</div>
      <ul>
        {project.stack.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
