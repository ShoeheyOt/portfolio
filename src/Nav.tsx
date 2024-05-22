export const Nav = () => {
  return (
    <div className="fixed right-2 flex flex-col gap-3">
      <a className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline-block text-xs">this</div>
        <img src="/Nav-circle.svg" className="w-4 h-4 stroke-slate-500" />
      </a>
      <a className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline-block text-xs">is</div>
        <img src="/Nav-circle.svg" className="w-4 h-4 stroke-slate-500" />
      </a>
      <a className="cursor-pointer flex justify-end group">
        <div className="hidden group-hover:inline-block text-xs">nav</div>
        <img src="/Nav-circle.svg" className="w-4 h-4 stroke-slate-500" />
      </a>
    </div>
  );
};
