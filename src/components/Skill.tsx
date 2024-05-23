import { Backend } from "./ui/Skills/Backend";
import { Frontend } from "./ui/Skills/Frontend";
import { Infrastructure } from "./ui/Skills/Infrastructure";

export const Skill = () => {
  return (
    <div className="border border-white w-1/2">
      <Frontend />
      <Backend />
      <Infrastructure />
    </div>
  );
};
