export const Nav = () => {
  return (
    <div className="fixed right-2 flex flex-col gap-6 top-1/2 -translate-y-1/2">
      <a href="#header" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline text-lg my-auto mr-1">
          Top
        </div>
        <img src="/home.svg" />
      </a>
      <a href="#about" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline text-lg my-auto mr-1">
          About
        </div>
        <img src="/human.svg" />
      </a>
      <a href="#contact" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline text-lg my-auto mr-1">
          Contact
        </div>
        <img src="/contact.svg" />
      </a>
    </div>
  );
};
