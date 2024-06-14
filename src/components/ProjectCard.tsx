import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card w-full relative group flex flex-col lg:flex-row lg:items-center gap-16 mx-8 bg-themeWhite rounded-xl">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={project.img}
          className="block transition w-1/2 md:w-1/3 pt-8 lg:w-auto lg:h-3/4 rounded-lg"
          alt={project.name}
        />
      </div>
      <section>
        <div className="text-dark mx-8 flex lg:items-center lg:justify-center lg:h-1/2">
          <h2>{project.name}</h2>
        </div>
        <div>
          <ul>
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
      </section>
      {/* <div className="absolute h-full w-full transition ease-linear top-4 left-2 md:top-12 md:left-4 lg:top-16 lg:left-6 xl:top-20 opacity-0 group-hover:opacity-90">
        <div className="text-lg md:text-xl lg:text-2xl h-1/4 text-themeWhite">
          {project.name}
        </div>
        <ul className="flex gap-2 flex-wrap">
        </ul>
      </div> */}
    </div>
  );
};
