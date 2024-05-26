export const Nav = () => {
  return (
    <div className="fixed right-2 flex flex-col gap-3 top-1/2 -translate-y-1/2">
      <a href="#header" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline text-lg">Top</div>
        <img src="/Nav-circle.svg" />
      </a>
      <a href="#about" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline text-lg">About</div>
        <img src="/Nav-circle.svg" />
      </a>
      <a href="#contact" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline text-lg">Contact</div>
        <img src="/Nav-circle.svg" />
      </a>
    </div>
  );
};
