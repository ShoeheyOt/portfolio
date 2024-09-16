import { Backend } from "./ui/Skills/Backend";
import { Frontend } from "./ui/Skills/Frontend";
import { Infrastructure } from "./ui/Skills/Infrastructure";

export const Skill = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-themeWhite mb-6 lg:mb-12 lg:-mt-20 2xl:-mt-36 4xl:-mt-24 2xl:mb-20 4xl:mb-28 text-3xl/10 lg:text-4xl/10 xl:text-5xl/10 text-center">
        Tech Stack
      </p>
      <Frontend />
      <Backend />
      <Infrastructure />
    </div>
  );
};
