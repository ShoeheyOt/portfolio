"use client";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/TypewriterEffect";

export function TypewriterHeader() {
  const words = [
    {
      text: "Hi  ",
    },
    {
      text: " All. ",
    },
    {
      text: "I'm ",
    },
    {
      text: "Shu ",
      className: "dark:text-secondary underline decoration-secondary",
    },
    {
      text: "full ",
    },
    {
      text: "stack ",
    },
    {
      text: "developer.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-4xl  mt-10">
        Enthusiast who love coding
      </p>
    </div>
  );
}
