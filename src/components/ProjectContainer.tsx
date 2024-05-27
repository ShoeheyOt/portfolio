import { projectData } from "../assets/data";
import { ProjectCard } from "./ProjectCard";

export const ProjectContainer = () => {
  return (
    <>
      <p className="text-center text-3xl text-themeWhite mt-16 2xl:-mt-8 mb-8 mx-4">
        My Projects
      </p>
      <div className="mx-4 flex flex-row gap-4 2xl:gap-0 justify-center flex-wrap xl:flex-nowrap 2xl:h-full">
        {projectData.map((project) => (
          <ProjectCard key={project.dataId} project={project} />
        ))}
      </div>
    </>
  );
};
