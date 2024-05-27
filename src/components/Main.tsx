import { About } from "./About";
import { ProjectContainer } from "./ProjectContainer";
import { Skill } from "./Skill";

export const Main = () => {
  return (
    <div className="2xl:h-screen">
      <div className="flex flex-col lg:flex-row justify-between lg:h-1/2 lg:px-12">
        <About />
        <Skill />
      </div>
      <div className="lg:h-1/2">
        <ProjectContainer />
      </div>
    </div>
  );
};
