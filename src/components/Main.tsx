import { About } from "./About";
import { ProjectContainer } from "./ProjectContainer";
import { Skill } from "./Skill";

export const Main = () => {
  return (
    <div className="2xl:h-screen 3xl:w-[calc(100vw-14rem)]">
      <div className="flex flex-col lg:flex-row justify-between lg:h-1/2 ">
        <About />
        <Skill />
      </div>
      <div className="lg:h-1/2 w-full lg:w-11/12">
        <ProjectContainer />
      </div>
    </div>
  );
};
