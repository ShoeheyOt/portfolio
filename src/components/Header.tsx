import { TypewriterHeader } from "./TypewriterHeader";

export const Header = () => {
  return (
    <div
      id="header"
      className="h-screen w-screen lg:w-[calc(100vw-14rem)] mt-8 mb-8"
    >
      <TypewriterHeader />
    </div>
  );
};
