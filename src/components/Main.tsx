import { About } from "./About";
import { LogoDescription } from "./LogoDescription";
import { ProjectContainer } from "./ProjectContainer";
import { Skill } from "./Skill";

export const Main = () => {
  return (
    <div>
      <div className="text-sm lg:text-3xl flex flex-col justify-between items-center w-full px-4 md:px-16 lg:px-36">
        <About />
        <LogoDescription />
        <Skill />
      </div>
      <div>
        <ProjectContainer />
      </div>
    </div>
  );
};
