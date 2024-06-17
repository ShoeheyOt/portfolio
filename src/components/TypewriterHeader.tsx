"use client";
import { TypewriterEffect } from "./ui/TypewriterEffect";

export function TypewriterHeader() {
  const words = [
    {
      text: "Hi,",
      className: "text-themeWhite",
    },
    {
      text: "I'm",
      className: "text-themeWhite",
    },
    {
      text: "Shu",
      className:
        "text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl text-forest3bg underline decoration-forest3bg",
    },
    {
      text: "Front",
      className: "text-themeWhite",
    },
    {
      text: "End",
      className: "text-themeWhite",
    },
    {
      text: "developer.",
      className: "text-themeWhite",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words} />
      <p className="text-themeWhite md:text-2xl xl:text-3xl mt-10">
        Enthusiast who love and enjoy{" "}
        <span className="text-forest3bg underline decoration-forest3bg">
          Coding
        </span>
      </p>
    </div>
  );
}
