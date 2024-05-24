import { About } from "./About";
import { Project } from "./Project";
import { Skill } from "./Skill";

export const Main = () => {
  return (
    <div className="h-screen w-[calc(100vw-12rem)]">
      <div className="w-full flex justify-between  h-1/2">
        <About />
        <Skill />
      </div>
      <div className="h-1/2 border border-white">
        <Project />
      </div>
    </div>
  );
};
