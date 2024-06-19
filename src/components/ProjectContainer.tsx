import { projectData } from "../assets/data";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const ProjectContainer = () => {
  const projectContentsRef = useRef<HTMLDivElement>(null);
  const projectWrapperRef = useRef(null);
  useGSAP(
    () => {
      const projectContents = projectContentsRef.current;
      const cards = gsap.utils.toArray(".card");

      //total width of cards - window innerWidth, calculate how log it needs to scroll
      const getScrollAmount = () => {
        const cardsScrollWidth = projectContentsRef?.current!.scrollWidth;
        return -(cardsScrollWidth - window.innerWidth);
      };
      gsap.to(cards, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: projectContents,
          start: "center center",
          pin: true,
          scrub: 1,

          snap: 1 / (cards.length - 1),
          end: () => `+=${getScrollAmount() * -1}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: projectWrapperRef }
  );
  return (
    <div className="2xl:mt-28">
      <p className="text-center text-3xl text-themeWhite mt-16 2xl:-mt-3 mb-8 mx-4">
        My Projects
      </p>
      <div ref={projectWrapperRef}>
        <div
          ref={projectContentsRef}
          className="w-[400%] h-[70vh] sm:h-[85vh] flex flex-row gap-4 2xl:gap-0 justify-between flex-nowrap pr-4"
        >
          {projectData.map((project) => (
            <ProjectCard key={project.dataId} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
