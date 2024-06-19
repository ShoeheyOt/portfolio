import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card w-full flex flex-col items-center gap-4 sm:gap-2 lg:gap-4 py-6 px-3 lg:px-8 mx-14 lg:mx-28 2xl:mx-52 3xl:mx-80 bg-themeWhite rounded-xl">
      <div className="text-dark w-5/6 md:w-2/3 xl:w-3/5 2xl:w-1/2">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">
          {project.name}
        </h2>
        <hr className=" border-forest2bg border-2 rounded-lg mt-3" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-5/6 md:w-2/3 xl:w-3/5 2xl:w-1/2 my-4">
          <img src={project.img} alt={project.name} className="rounded-lg" />
        </div>
        <div className="h-full w-5/6 md:w-2/3 xl:w-3/5 2xl:w-1/2">
          <div className="mb-4">
            <p className="text-dark md:text-2xl underline decoration-2 underline-offset-4 rounded-lg decoration-forest2bg mb-2">
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
          <div className="text-dark">
            <p className="font-normal">
              {window.innerWidth < 640 ? project.shortDesc : project.fullDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
