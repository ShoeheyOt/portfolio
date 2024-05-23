import { About } from "./About";
import { Project } from "./Project";
import { Skill } from "./Skill";

export const Main = () => {
  return (
    <div className="h-screen w-[calc(100vw-20rem)] border border-white">
      <div className="flex justify-between border border-white h-1/2">
        <About />
        <Skill />
      </div>
      <div className="h-1/2">
        <Project />
      </div>
    </div>
  );
};
