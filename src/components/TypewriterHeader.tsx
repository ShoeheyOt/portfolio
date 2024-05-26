"use client";
import { TypewriterEffect } from "./ui/TypewriterEffect";

export function TypewriterHeader() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "All,",
    },
    {
      text: "I'm",
    },
    {
      text: "Shu ",
      className: "text-2xl dark:text-secondary underline decoration-secondary",
    },
    {
      text: "full",
    },
    {
      text: "stack",
    },
    {
      text: "developer.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words} />
      <p className="text-dark dark:text-themeWhite sm:text-lg md:text-2xl lg:text-4xl mt-10">
        Enthusiast who love and enjoy{" "}
        <span className="text-secondary underline decoration-secondary">
          Coding
        </span>
      </p>
    </div>
  );
}
