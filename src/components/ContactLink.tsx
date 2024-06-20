export const ContactLink = () => {
  const githubLink = import.meta.env.VITE_VERCEL_GITHUB_URL;
  const linkedInLink = import.meta.env.VITE_VERCEL_LINKEDIN_URL;

  return (
    <div role="navigation" className="flex gap-20">
      <a
        aria-label="jump to github"
        title="github"
        href={`${githubLink}`}
        target="_blank"
        className="cursor-pointer hover:opacity-70"
      >
        <img
          src="/external/github.svg"
          className="w-8 h-8 md:w-11 md:h-11 lg:w-12 lg:h-12"
        />
      </a>
      <a
        aria-label="jump to LinkedIn"
        title="LinkedIn"
        href={`${linkedInLink}`}
        target="_blank"
        className="cursor-pointer hover:opacity-70"
      >
        <img
          src="/external/linkedin.svg"
          className="w-8 h-8 md:w-11 md:h-11 lg:w-12 lg:h-12"
        />
      </a>
      <a
        aria-label="jump to resume"
        title="Resume"
        className="cursor-pointer hover:opacity-70"
      >
        <img
          src="/external/document.svg"
          className="w-8 h-8 md:w-11 md:h-11 lg:w-12 lg:h-12"
        />
      </a>
    </div>
  );
};
