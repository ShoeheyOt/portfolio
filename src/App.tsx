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
  const wrapperRef = useRef(null);
  const campRef = useRef(null);
  const campBGRef = useRef(null);
  const blueBuckRef = useRef(null);
  const forest2Ref = useRef(null);
  const forest2BGref = useRef(null);
  const forest3Ref = useRef(null);
  const forest3BGref = useRef(null);
  const mount1Ref = useRef(null);
  const mount2Ref = useRef(null);
  const mountRightRef = useRef(null);
  const mountLeftRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const basketBallRef = useRef(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const camp = campRef.current;
      const campBG = campBGRef.current;
      const blueBuck = blueBuckRef.current;
      const forest2 = forest2Ref.current;
      const forest2BG = forest2BGref.current;
      const forest3 = forest3Ref.current;
      const forest3BG = forest3BGref.current;
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
          trigger: wrapper,
          start: "top top",
          end: "2000 bottom",
          scrub: true,
          pin: true,
        },
      });

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
      tl.fromTo(mountR, { opacity: 0, x: "0" }, { opacity: 1, x: "-=100" }, 1);
      tl.fromTo(
        mountL,
        { opacity: 0, x: "-=200" },
        { opacity: 1, x: "+=150" },
        1.2
      );
      tl.fromTo(
        forest3,
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, y: "-=50" },
        1.5
      );
      tl.fromTo(
        forest3BG,
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
        { opacity: 0, scale: 0.6, y: "+=30", x: "+=40" },
        { opacity: 1, scale: 0.4, y: "-=60", x: "-=80" },
        1.7
      );
      tl.fromTo(
        forest2BG,
        { scale: 1, opacity: 0, y: "+=30" },
        { scale: 1, opacity: 1, y: "-=12" },
        1.7
      );
      tl.to(mountR, { scale: 0.7 }, 1.7);
      tl.to(mountL, { scale: 1.2 }, 1.7);
      tl.fromTo(camp, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1 }, 2.3);

      tl.to(cloud1, { y: "+=20" }, 3.5);
      tl.to(cloud2, { y: "+=20" }, 3.5);

      tl.to(mount2, { y: "+=80" }, 3.5);
      tl.to(mount1, { y: "+=60" }, 3.5);
      tl.to(mountR, { y: "+=50" }, 3.5);
      tl.to(mountL, { y: "+=50" }, 3.5);
      tl.to(forest3, { y: "+=40" }, 3.5);
      tl.to(forest3BG, { y: "+=80", scaleY: 0.5 }, 3.5);
      tl.to(forest2, { y: "+=20" }, 3.5);
      tl.to(blueBuck, { y: "+=10" }, 3.5);
      tl.to(forest2BG, { y: "+=20", scaleY: 0.4 }, 3.5);
      tl.to(campBG, { opacity: 1, y: "-=28" }, 2.7);
      tl.to(camp, { y: "-=140" }, 3.5);
      tl.fromTo(
        basketball,
        { x: "-=300", y: "+=180", opacity: 0 },
        { ease: "power1.out", duration: 1, x: "+=200", y: "0", opacity: 1 }
      );
    },
    { scope: wrapperRef.current! }
  );
  return (
    <div className="font-mono font-semibold text-primary text-opacity-90">
      <section ref={wrapperRef} className="relative h-screen bg-themeWhite">
        <img
          ref={basketBallRef}
          src="hero/basketball.svg"
          className="absolute w-12 h-12 top-12 right-96"
        />
        <img
          ref={mount2Ref}
          src="hero/mountains3.svg"
          className="absolute -top-8 2xl:-top-8 left-0 w-full h-full object-fill opacity-60"
        />
        <img
          ref={cloud1Ref}
          src="hero/cloud1.rev.svg"
          className="absolute h-full w-full top-0 left-20 opacity-50"
        />
        <img
          ref={cloud2Ref}
          src="hero/cloud2.rev.svg"
          className="absolute h-full w-full opacity-50 top-0 left-12"
        />

        <img
          ref={mount1Ref}
          src="hero/mountains1.rev.svg"
          alt="mountain1.rev"
          className="absolute -top-20 sm:-top-24 left-0 w-full h-full object-fill"
        />
        <img
          ref={mountRightRef}
          src="hero/mountain-Right.rev.svg"
          alt="mountain-Right"
          className="absolute -right-40 sm:-right-64 -top-12 sm:-top-20 lg:-top-20 scale-125 md:scale-100 lg:scale-90 w-1/2 h-full object-fill"
        />
        <img
          ref={mountLeftRef}
          src="hero/mountain-Left.rev.svg"
          alt="mountain-left"
          className="absolute -top-4 sm:-top-2 md:top-6 lg:top-8 2xl:top-12 3xl:top-16 left-12 sm:-left-12 2xl:scale-150 h-full object-cover stroke-red-500 fill-red-500"
        />
        <div
          ref={forest3BGref}
          className="absolute bottom-44 w-full h-1/5 bg-forest3bg"
        ></div>
        <img
          ref={forest3Ref}
          src="hero/forest3.svg"
          alt="forest3"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          ref={forest2BGref}
          className="absolute bottom-12 w-full h-1/3 bg-forest2bg"
        ></div>
        <img
          ref={blueBuckRef}
          src="hero/deerAlone2.svg"
          className="absolute w-full h-full top-56 left-[58rem] scale-[.4]"
        />
        <img
          ref={forest2Ref}
          src="hero/forest2.svg"
          alt="forest2"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
        />

        <div
          ref={campBGRef}
          className="absolute -bottom-12 opacity-0 w-full h-1/6  bg-dark"
        ></div>
        <img
          ref={campRef}
          src="hero/campTest1.png"
          className="absolute w-full h-full scale-125 object-cover text-dark"
        />
      </section>
      <Nav />
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
