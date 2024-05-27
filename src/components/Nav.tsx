export const Nav = () => {
  return (
    <div className="fixed top-2 flex left-1/2 -translate-x-1/2 2xl:right-2 2xl:flex-col gap-6 2xl:top-1/2 2xl:-translate-y-1/2">
      <a
        href="#header"
        className="cursor-pointer flex flex-col 2xl:flex-row justify-end group"
      >
        <img src="/home.svg" title="home" />
        <div className="hidden group-hover:inline-box text-lg my-auto mr-1">
          Top
        </div>
      </a>
      <a
        href="#about"
        className="cursor-pointer flex flex-col 2xl:flex-row justify-end group"
      >
        <img src="/human.svg" title="About" />
        <div className="hidden group-hover:inline-box text-lg my-auto mr-1">
          About
        </div>
      </a>
      <a
        href="#contact"
        className="cursor-pointer flex flex-col 2xl:flex-row justify-end group"
      >
        <img src="/contact.svg" title="contact" />
        <div className="hidden group-hover:inline-box text-lg my-auto mr-1">
          Contact
        </div>
      </a>
    </div>
  );
};
