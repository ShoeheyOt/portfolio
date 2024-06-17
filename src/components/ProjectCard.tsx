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
      <section className="flex flex-col gap-24 mr-12">
        <div className="text-dark flex flex-col gap-24 lg:h-1/2">
          <h2 className="font-semibold text-6xl">{project.name}</h2>
          <p className="">{project.fullDesc}</p>
        </div>
        <div>
          <ul className="flex gap-2">
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
    </div>
  );
};
