export const Nav = () => {
  return (
    <div className="fixed right-2 flex flex-col gap-3 top-1/2 -translate-y-1/2">
      <a href="#header" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline-block text-xs">Top</div>
        <img src="/Nav-circle.svg" className="w-4 h-4 stroke-slate-500" />
      </a>
      <a href="#about" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline-block text-xs">About</div>
        <img src="/Nav-circle.svg" className="w-4 h-4 stroke-slate-500" />
      </a>
      <a href="#contact" className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline-block text-xs">Contact</div>
        <img src="/Nav-circle.svg" className="w-4 h-4 stroke-slate-500" />
      </a>
    </div>
  );
};
