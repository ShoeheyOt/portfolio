import { projectData } from "../assets/data";
import { ProjectCard } from "./ProjectCard";

export const ProjectContainer = () => {
  return (
    <div className="flex justify-between w-full h-full">
      {projectData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};
