import { Project } from "../assets/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { name, img, stack, shortDesc, fullDesc, repo, website, demo, link } = project;
  return (
    <div className="card w-full flex flex-col items-center gap-4 sm:gap-2 lg:gap-4 py-6  mx-4 md:mx-16 lg:mx-40 3xl:mx-64 px-3 lg:px-8 bg-themeWhite rounded-xl">
      <div className="text-dark w-5/6 md:w-2/3 xl:w-3/5 2xl:w-1/2 3xl:w-2/5">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">{name}</h2>
        <hr className=" border-forest2bg rounded-lg mt-3" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-5/6 md:w-2/3 xl:w-3/5 2xl:w-1/2 3xl:w-2/5 my-4">
          <img src={img} alt={name} className="rounded-lg" />
        </div>
        <div className="h-full w-5/6 md:w-2/3 xl:w-3/5 2xl:w-1/2 3xl:w-2/5">
          <div className="mb-4">
            <p className="text-dark md:text-2xl underline decoration-2 underline-offset-4 rounded-lg decoration-forest2bg mb-2 lg:mb-6">
              Tech Stack
            </p>
            <ul className="flex gap-2">
              {stack.map((skill, index) => (
                <li key={index}>
                  <img src={skill} className="w-6 lg:w-8 h-auto" />
                </li>
              ))}
            </ul>
          </div>
          <div className="text-dark">
            <p className="font-normal text-xs md:text-sm xl:text-base leading-loose">
              {window.innerWidth < 640 ? shortDesc : fullDesc}
            </p>
          </div>
          <div className="flex gap-4 mt-4 text-dark text-xs md:text-sm xl:text-base">
            <h4>Link : </h4>
            <a href={repo} target="_blank" className="decoration underline">
              Github
            </a>
            {website && (
              <a href={website} target="_blank" className="decoration underline">
                Product Website
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" className="decoration underline">
                Demo
              </a>
            )}
            {link && (
              <a href={link} target="_blank" className="decoration underline">
                Document
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
