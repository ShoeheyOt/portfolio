export const ContactLink = () => {
  const githubLink = import.meta.env.VITE_GITHUB_URL;
  const linkedInLink = import.meta.env.VITE_VERCEL_LINKEDIN_URL;

  return (
    <div className="flex gap-20">
      <a
        title="github"
        href={`${githubLink}`}
        target="_blank"
        className="cursor-pointer hover:opacity-70"
      >
        <img src="/external/github.svg" className="w-12 h-12" />
      </a>
      <a
        title="LinkedIn"
        href={`${linkedInLink}`}
        target="_blank"
        className="cursor-pointer hover:opacity-70"
      >
        <img src="/external/linkedin.svg" />
      </a>
      <a title="Resume" className="cursor-pointer hover:opacity-70">
        <img src="/external/document.svg" />
      </a>
    </div>
  );
};
