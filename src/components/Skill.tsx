import { Backend } from "./ui/Skills/Backend";
import { Frontend } from "./ui/Skills/Frontend";
import { Infrastructure } from "./ui/Skills/Infrastructure";

export const Skill = () => {
  return (
    <div className="w-1/2 flex flex-col mt-16 gap-2">
      <p className="text-themeWhite text-3xl mb-8">Tech Stack</p>
      <Frontend />
      <Backend />
      <Infrastructure />
    </div>
  );
};
