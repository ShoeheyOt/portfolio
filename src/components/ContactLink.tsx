export const ContactLink = () => {
  const githubLink = import.meta.env.VITE_GITHUB_URL;
  const linkedInLink = import.meta.env.VITE_LINKEDIN_URL;

  return (
    <div className="flex gap-20">
      <a
        title="github"
        className="cursor-pointer hover:opacity-70"
        href={`${githubLink}`}
      >
        <img src="/external/github.svg" className="w-12 h-12" />
      </a>
      <a
        title="LinkedIn"
        className="cursor-pointer hover:opacity-70"
        href={`${linkedInLink}`}
      >
        <img src="/external/linkedin.svg" />
      </a>
      <a title="Resume" className="cursor-pointer hover:opacity-70">
        <img src="/external/document.svg" />
      </a>
    </div>
  );
};
