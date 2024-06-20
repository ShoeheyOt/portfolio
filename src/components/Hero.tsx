import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroWrapperRef = useRef<HTMLElement | null>(null);
  const heroContentsRef = useRef<HTMLDivElement | null>(null);
  const text1Ref = useRef<HTMLDivElement | null>(null);

  const campRef = useRef<HTMLImageElement | null>(null);
  const campBGRef = useRef<HTMLImageElement | null>(null);
  const blueBuckRef = useRef<HTMLImageElement | null>(null);
  const forest2Ref = useRef<HTMLImageElement | null>(null);
  const forest3Ref = useRef<HTMLImageElement | null>(null);
  const mount1Ref = useRef<HTMLImageElement | null>(null);
  const mount2Ref = useRef<HTMLImageElement | null>(null);
  const mountRightRef = useRef<HTMLImageElement | null>(null);
  const mountLeftRef = useRef<HTMLImageElement | null>(null);
  const cloud1Ref = useRef<HTMLImageElement | null>(null);
  const cloud2Ref = useRef<HTMLImageElement | null>(null);
  const basketBallRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const contents = heroContentsRef.current;
      const text1 = text1Ref.current;

      const camp = campRef.current;
      const campBG = campBGRef.current;
      const blueBuck = blueBuckRef.current;
      const forest2 = forest2Ref.current;
      const forest3 = forest3Ref.current;
      const mount1 = mount1Ref.current;
      const mount2 = mount2Ref.current;
      const mountR = mountRightRef.current;
      const mountL = mountLeftRef.current;
      const cloud1 = cloud1Ref.current;
      const cloud2 = cloud2Ref.current;
      const basketball = basketBallRef.current;

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: contents,
          start: "top top",
          // markers: true,
          end: () => {
            if (window.innerWidth < 1100) {
              return "+=150%";
            } else {
              return "+=100%";
            }
          },
          scrub: true,
          pin: true,
        },
      });
      tl.to(text1, { opacity: 0, scale: 0.3, y: "+=100" }, 0);
      tl.fromTo(
        cloud1,
        { opacity: 0, scale: 1.8 },
        { opacity: 0.3, scale: 1 },
        0
      );
      tl.fromTo(
        cloud2,
        { opacity: 0, scale: 1.8 },
        { opacity: 0.3, scale: 1 },
        0
      );
      tl.fromTo(
        mount2,
        { opacity: 0, scale: 1.8 },
        { opacity: 1, scale: 1.2 },
        0
      );
      tl.fromTo(
        mount1,
        { opacity: 0, scale: 1.8 },
        { opacity: 1, scale: 1.2 },
        0.2
      );
      tl.fromTo(mount2, { scale: 1.2 }, { scale: 1, opacity: 0.4 }, 1);

      tl.fromTo(mount1, { scale: 1.2 }, { scale: 1 }, 1);
      tl.fromTo(
        mountR,
        { opacity: 0, x: "+=100" },
        { opacity: 1, x: "-=100" },
        1
      );
      tl.fromTo(
        mountL,
        { opacity: 0, x: "-=100" },
        { opacity: 1, x: "0" },
        1.2
      );
      tl.fromTo(
        forest3,
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, y: "-=50" },
        1.5
      );

      tl.fromTo(
        forest2,
        { scale: 2, opacity: 0 },
        { scale: 1, opacity: 1, y: "-=30" },
        1.7
      );
      tl.fromTo(
        blueBuck,
        { opacity: 0, y: "+=30", x: "+=40" },
        { opacity: 1, y: "-=60", x: "-=80" },
        1.7
      );

      tl.fromTo(camp, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1 }, 2.3);
      tl.fromTo(
        campBG,
        { opacity: 0, scale: 2 },
        { opacity: 1, scale: 1 },
        2.3
      );

      let mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width:800px)",
          isSmallMobile: "(max-width:425px)",
          isMobile: "(max-width:799px)",
        },
        (context) => {
          if (!context.conditions) return;
          const { isDesktop, isMobile, isSmallMobile } = context.conditions;
          isSmallMobile && tl.to(mountR, { x: "-=100" }, 0);
          tl.to(cloud1, { y: "+=20" }, 3.5);
          tl.to(cloud2, { y: "+=20" }, 3.5);
          tl.to(mount2, { y: isMobile ? "+=40" : "+=80" }, 3.5);
          tl.to(mount1, { y: isMobile ? "+=30" : "+=60" }, 3.5);
          tl.to(mountR, { y: isMobile ? "+=20" : "+=50" }, 3.5);
          tl.to(mountL, { y: isMobile ? "+=20" : "+=50" }, 3.5);
          tl.to(forest3, { y: "+=40" }, 3.5);
          tl.to(forest2, { y: "+=20" }, 3.5);
          isSmallMobile && tl.to(blueBuck, { x: "-=20" }, 0);
          tl.to(blueBuck, { y: "+=10" }, 3.5);

          tl.to(camp, { y: isDesktop ? "-=30" : "-=10" }, 3.5);
          isSmallMobile && tl.to(campBG, { y: "+=10" }, 3.5);
          tl.fromTo(
            basketball,
            { x: "-=300", y: "+=180", opacity: 0 },
            { ease: "power1.out", duration: 1, x: "0", y: "0", opacity: 1 },
            3.5
          );
        }
      );
    },
    { scope: heroWrapperRef }
  );

  return (
    <section ref={heroWrapperRef} className="relative h-[200vh]">
      <div ref={heroContentsRef}>
        <img
          src="hero/background.svg"
          className="absolute w-full object-contain 4xl:h-screen 4xl:object-cover"
        />
        <div
          ref={text1Ref}
          className="absolute w-screen mt-12 md:mt-20 lg:mt-52 xl:mt-72 2xl:mt-0 2xl:h-screen flex flex-col lg:flex-row justify-center sm:gap-4 md:gap-8 3xl:gap-32 items-center"
        >
          <img
            src="hero/logo.svg"
            alt="logo"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 4xl:w-96 4xl:h-96"
          />
          <p className=" text-dark font-montserrat font-extralight xl:font-thin text-xl md:text-3xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            User-Centered <br />
            Front End Developer
          </p>
        </div>
        <img
          ref={basketBallRef}
          src="hero/basketball.svg"
          alt="basket-ball"
          className="absolute w-full object-contain 4xl:h-screen 4xl:object-cover"
        />
        <img
          ref={mount2Ref}
          src="hero/mountains3.svg"
          alt="mountains3"
          className="absolute -top-16 sm:-top-28 md:-top-48 4xl:-top-12 w-full object-contain opacity-60 4xl:h-screen"
        />
        <img
          ref={cloud1Ref}
          src="hero/cloud1.svg"
          alt="cloud1"
          className="absolute w-full opacity-70 4xl:h-screen 4xl:object-cover"
        />
        <img
          ref={cloud2Ref}
          src="hero/cloud2.svg"
          alt="cloud2"
          className="absolute w-screen opacity-100 4xl:h-screen 4xl:object-cover"
        />

        <img
          ref={mount1Ref}
          src="hero/mountains1.svg"
          alt="mountain1"
          className="absolute w-full top-2 object-contain 4xl:h-screen"
        />
        <img
          ref={mountRightRef}
          src="hero/mountain-Right.svg"
          alt="mountain-Right"
          className="absolute -top-8 w-full object-contain 4xl:h-screen 4xl:object-cover"
        />
        <img
          ref={mountLeftRef}
          src="hero/mountain-Left.svg"
          alt="mountain-Left"
          className="absolute w-full object-contain"
        />

        <img
          ref={forest3Ref}
          src="hero/forest3.svg"
          alt="forest3"
          className="absolute top-4 left-0 w-full object-contain 4xl:h-screen 4xl:object-cover"
        />

        <img
          ref={forest2Ref}
          src="hero/forest2.svg"
          alt="forest2"
          className="absolute top-10 4xl:top-0 left-0 w-full object-contain 4xl:h-screen 4xl:object-cover"
        />
        <img
          ref={blueBuckRef}
          src="hero/blue-buck.svg"
          alt="blue-buck"
          className="absolute w-full 4xl:h-screen 4xl:object-cover"
        />
        <img
          ref={campBGRef}
          src="hero/campBG.svg"
          alt="camp-background"
          className="absolute w-full 4xl:h-[101vh] 4xl:object-cover"
        />
        <img
          ref={campRef}
          src="hero/camp.png"
          alt="camp"
          className="absolute w-screen 4xl:h-screen object-contain 4xl:object-cover"
        />
      </div>
    </section>
  );
};
