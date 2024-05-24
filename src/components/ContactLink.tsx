export const ContactLink = () => {
  return (
    <div className="flex gap-20">
      <a className="cursor-pointer hover:opacity-70">
        <img src="/external/github.svg" className="w-12 h-12" />
      </a>
      <a className="cursor-pointer hover:opacity-70">
        <img src="/external/linkedin.svg" />
      </a>
      <a className="cursor-pointer hover:opacity-70">
        <img src="/external/document.svg" />
      </a>
    </div>
  );
};
