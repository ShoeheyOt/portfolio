import "./App.css";
import { Nav } from "./components/Nav";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroWrapperRef = useRef<HTMLElement | null>(null);
  const heroContentsRef = useRef<HTMLDivElement | null>(null);
  const text1Ref = useRef<HTMLDivElement | null>(null);
  const text2Ref = useRef<HTMLDivElement | null>(null);
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
      const text2 = text2Ref.current;
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
        { isDesktop: "(min-width:800px)", isMobile: "(max-width:799px)" },
        (context) => {
          if (!context.conditions) return;
          const { isDesktop, isMobile } = context.conditions;
          tl.to(cloud1, { y: "+=20" }, 3.5);
          tl.to(cloud2, { y: "+=20" }, 3.5);
          tl.to(mount2, { y: isMobile ? "+=40" : "+=80" }, 3.5);
          tl.to(mount1, { y: isMobile ? "+=30" : "+=60" }, 3.5);
          tl.to(mountR, { y: isMobile ? "+=20" : "+=50" }, 3.5);
          tl.to(mountL, { y: isMobile ? "+=20" : "+=50" }, 3.5);
          tl.to(forest3, { y: "+=40" }, 3.5);
          tl.to(forest2, { y: "+=20" }, 3.5);
          tl.to(blueBuck, { y: "+=10" }, 3.5);

          tl.to(camp, { y: isDesktop ? "-=30" : "-=10" }, 3.5);
          tl.fromTo(
            basketball,
            { x: "-=300", y: "+=180", opacity: 0 },
            { ease: "power1.out", duration: 1, x: "0", y: "0", opacity: 1 },
            3.5
          );
          tl.fromTo(
            text2,
            { opacity: 0, y: "+=200" },
            { opacity: 1, y: "-=400" },
            4.5
          );
          tl.to(text2, { opacity: 1 }, 5.5);
        }
      );
    },
    { scope: heroWrapperRef }
  );

  return (
    <div className="font-mono font-semibold text-primary text-opacity-90">
      <section ref={heroWrapperRef} className="relative h-[200vh]">
        <div ref={heroContentsRef}>
          <img
            src="hero/background.svg"
            className="absolute w-full object-contain 4xl:h-screen 4xl:object-cover"
          />
          {/* <div ref={text1Ref} className="flex justify-between">
            <p className="absolute top-24 left-48 text-dark skew-y-12 text-7xl underline underline-offset-8">
              Having Cozy Time?
            </p>
            <p className="absolute top-24 right-48 text-dark -skew-y-12 text-7xl underline underline-offset-8">
              Need a Coffee?
            </p>
          </div> */}
          <img
            ref={basketBallRef}
            src="hero/basketball.svg"
            className="absolute w-full object-contain 4xl:h-screen 4xl:object-cover"
          />
          <img
            ref={mount2Ref}
            src="hero/mountains3.svg"
            className="absolute -top-16 sm:-top-28 md:-top-48 4xl:-top-12 w-full object-contain opacity-60 4xl:h-screen"
          />
          <img
            ref={cloud1Ref}
            src="hero/cloud1.rev.svg"
            className="absolute w-full opacity-70 4xl:h-screen 4xl:object-cover"
          />
          <img
            ref={cloud2Ref}
            src="hero/cloud2.rev.svg"
            className="absolute w-screen opacity-100 4xl:h-screen 4xl:object-cover"
          />

          <img
            ref={mount1Ref}
            src="hero/mountains1.rev.svg"
            alt="mountain1.rev"
            className="absolute w-full top-2 object-contain 4xl:h-screen"
          />
          <img
            ref={mountRightRef}
            src="hero/mountain-Right.rev2.svg"
            alt="mountain-Right"
            className="absolute -top-8 w-full object-contain 4xl:h-screen 4xl:object-cover"
          />
          <img
            ref={mountLeftRef}
            src="hero/mountain-Left.rev.svg"
            alt="mountain-left"
            className="absolute w-full object-contain"
          />
          <div
            // ref={forest3BGref}
            className="absolute bottom-44 w-full h-1/5 bg-forest3bg"
          ></div>
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
            src="hero/deerAlone2.svg"
            className="absolute w-full 4xl:h-screen 4xl:object-cover"
          />
          <img
            ref={campBGRef}
            src="hero/campBG.svg"
            className="absolute w-full 4xl:h-[101vh] 4xl:object-cover"
          />
          <img
            ref={campRef}
            src="hero/campTest1.png"
            className="absolute w-screen 4xl:h-screen object-contain 4xl:object-cover"
          />
          <h3
            ref={text2Ref}
            className="absolute text-themeWhite text-sm top-48 left-14"
          >
            Enjoy and Relax
          </h3>
        </div>
      </section>

      <Nav />
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
