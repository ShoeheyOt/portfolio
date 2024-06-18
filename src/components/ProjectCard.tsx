import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card w-full flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 lg:px-8 mx-8 bg-themeWhite rounded-xl">
      <div className="w-full flex justify-center h-full">
        <img
          src={project.img}
          className="w-1/3 lg:w-full xl:mx-4 2xl:mx-12 3xl:mx-16 4xl:mx-32 mt-8 xl:my-12 rounded-lg"
          alt={project.name}
        />
      </div>
      <div className="flex flex-col gap-12 px-10 lg:px-0 mt-8 lg:w-[150%]">
        <div className="text-dark flex flex-col gap-12 md:gap-6">
          <h2 className="font-medium text-2xl xl:text-5xl">{project.name}</h2>
          <p className="font-normal">
            {window.innerWidth < 1024 ? project.shortDesc : project.fullDesc}
          </p>
        </div>
        <div>
          <ul className="flex gap-2">
            {project.stack.map((skill, index) => (
              <li key={index}>
                <img
                  src={skill}
                  className="w-6 h-6 sm:w-11 sm:h-11 lg:w-auto lg:h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
