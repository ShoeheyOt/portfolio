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
      className: "dark:text-secondary underline decoration-secondary",
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
    <div className="flex flex-col items-center justify-center h-[40rem] mt-16">
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 sm:text-lg md:text-2xl lg:text-4xl mt-10">
        Enthusiast who love and enjoy coding
      </p>
    </div>
  );
}
