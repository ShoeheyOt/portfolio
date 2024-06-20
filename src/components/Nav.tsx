export const Nav = () => {
  return (
    <div
      role="navigation"
      className="fixed top-2 flex left-1/2 -translate-x-1/2 gap-6 z-10"
    >
      <a
        role="link"
        aria-label="jump to header"
        href="#header"
        className="cursor-pointer"
      >
        <img src="/home.svg" title="home" />
      </a>
      <a
        role="link"
        aria-label="jump to about"
        href="#about"
        className="cursor-pointer"
      >
        <img src="/human.svg" title="About" />
      </a>
      <a
        role="link"
        aria-label="jump to contact"
        href="#contact"
        className="cursor-pointer"
      >
        <img src="/contact.svg" title="contact" />
      </a>
    </div>
  );
};
