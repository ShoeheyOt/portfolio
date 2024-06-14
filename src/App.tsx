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
  const forest1Ref = useRef(null);
  const forest2Ref = useRef(null);
  const forest2BGref = useRef(null);
  const forest3Ref = useRef(null);
  const forest3BGref = useRef(null);
  const mount1Ref = useRef(null);
  const mount2Ref = useRef(null);
  const mountRightRef = useRef(null);
  const mountLeftRef = useRef(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const forest1 = forest1Ref.current;
      const forest2 = forest2Ref.current;
      const forest2BG = forest2BGref.current;
      const forest3 = forest3Ref.current;
      const forest3BG = forest3BGref.current;
      const mount1 = mount1Ref.current;
      const mount2 = mount2Ref.current;
      const mountR = mountRightRef.current;
      const mountL = mountLeftRef.current;

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

      tl.fromTo(mount2, { scale: 1.2 }, { scale: 1, opacity: 0.4 }, 0);
      tl.fromTo(mount1, { scale: 1.2 }, { scale: 1 }, 0);
      tl.fromTo(mountR, { opacity: 0, x: "0" }, { opacity: 1, x: "-=100" }, 0);
      tl.fromTo(
        mountL,
        { opacity: 0, x: "-=200" },
        { opacity: 1, x: "+=150" },
        0.2
      );
      tl.fromTo(
        forest3,
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, y: "-=50" },
        0.5
      );
      tl.fromTo(
        forest3BG,
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, y: "-=50" },
        0.5
      );
      tl.fromTo(
        forest2,
        { scale: 2, opacity: 0 },
        { scale: 1, opacity: 1, y: "-=30" },
        0.7
      );
      tl.fromTo(
        forest2BG,
        { scale: 1.3, opacity: 0, y: "+=30" },
        { scale: 1, opacity: 1, y: "-=12" },
        0.7
      );

      tl.fromTo(
        forest1,
        { scale: 2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
        },
        1
      );
    },
    { scope: wrapperRef.current! }
  );
  return (
    <div className="font-mono font-semibold text-primary text-opacity-90">
      <section ref={wrapperRef} className="relative h-screen bg-themeWhite">
        <img
          ref={mount2Ref}
          src="hero/mountains3.svg"
          className="absolute -top-8 2xl:-top-8 left-0 w-full h-full object-fill opacity-60"
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
          className="absolute -top-4 sm:-top-2 md:top-6 lg:top-8 2xl:top-12 3xl:top-16 left-12 sm:-left-12 2xl:scale-150 h-full object-cover"
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
          ref={forest2Ref}
          src="hero/forest2.svg"
          alt="forest2"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
        />
        <img
          ref={forest1Ref}
          src="hero/forest1.svg"
          className="absolute left-0 w-full h-full object-cover"
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
