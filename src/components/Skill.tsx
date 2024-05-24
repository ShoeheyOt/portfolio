import { Backend } from "./ui/Skills/Backend";
import { Frontend } from "./ui/Skills/Frontend";
import { Infrastructure } from "./ui/Skills/Infrastructure";

export const Skill = () => {
  return (
    <div className="w-1/2 flex flex-col gap-1 mt-8">
      <p>Tech Stack</p>
      <Frontend />
      <Backend />
      <Infrastructure />
    </div>
  );
};
