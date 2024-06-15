import { projectData } from "../assets/data";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const ProjectContainer = () => {
  const projectCardRef = useRef<HTMLDivElement>(null);
  const projectWrapperRef = useRef(null);
  useGSAP(
    () => {
      const wrapper = projectWrapperRef.current;
      const cards = gsap.utils.toArray(".card");

      //total width of cards - window innerWidth, calculate how log it needs to scroll
      const getScrollAmount = () => {
        const cardsScrollWidth = projectCardRef?.current!.scrollWidth;
        return -(cardsScrollWidth - window.innerWidth);
      };
      gsap.to(cards, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "center center",
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => `+=${getScrollAmount() * -1}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: projectCardRef }
  );
  return (
    <div className="2xl:mt-28">
      <p className="text-center text-3xl text-themeWhite mt-16 2xl:-mt-3 mb-8 mx-4">
        My Projects
      </p>
      <div ref={projectWrapperRef}>
        <div
          ref={projectCardRef}
          className="scrollParent w-[400%] h-[85vh] flex flex-row gap-4 2xl:gap-0 justify-between flex-nowrap last:pr-8"
        >
          {projectData.map((project) => (
            <ProjectCard key={project.dataId} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
