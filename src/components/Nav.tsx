export const Nav = () => {
  return (
    <div className="fixed top-2 flex left-1/2 -translate-x-1/2 gap-6 z-10">
      <a href="#header" className="cursor-pointer">
        <img src="/home.svg" title="home" />
      </a>
      <a href="#about" className="cursor-pointer">
        <img src="/human.svg" title="About" />
      </a>
      <a href="#contact" className="cursor-pointer">
        <img src="/contact.svg" title="contact" />
      </a>
    </div>
  );
};
