import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card w-full flex flex-col lg:flex-row items-center gap-4 md:gap-12 lg:gap-16 py-6 px-3 lg:px-8 mx-8 bg-themeWhite rounded-xl">
      <div className="h-full w-5/6 md:w-2/3 flex items-center md:mt-12">
        <img src={project.img} alt={project.name} className="rounded-lg" />
      </div>
      <div className="h-full w-5/6 md:w-2/3">
        <div className="text-dark">
          <h2 className="text-2xl md:text-3xl">{project.name}</h2>
          <hr className="border-forest2bg border-2 rounded-lg mb-6" />
          <p className="font-normal md:text-xl">
            {window.innerWidth < 1024 ? project.shortDesc : project.fullDesc}
          </p>
        </div>
        <div className="mt-6">
          <p className="text-dark md:text-2xl underline decoration-2 underline-offset-4 rounded-lg decoration-forest2bg mb-2 md:mb-6">
            Tech Stack
          </p>
          <ul className="flex gap-2">
            {project.stack.map((skill, index) => (
              <li key={index}>
                <img src={skill} className="h-8 w-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
