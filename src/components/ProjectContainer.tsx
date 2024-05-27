import { projectData } from "../assets/data";
import { ProjectCard } from "./ProjectCard";

export const ProjectContainer = () => {
  return (
    <>
      <p className="text-3xl text-themeWhite -mt-8">My Projects</p>
      <div className="flex flex-col 2xl:flex-row gap-4 w-full 2xl:h-full">
        {projectData.map((project) => (
          <ProjectCard key={project.dataId} project={project} />
        ))}
      </div>
    </>
  );
};
