"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Send",
    },
    {
      text: "me",
    },
    {
      text: "an",
    },
    {
      text: "email &",
    },
    {
      text: "let's",
    },
    {
      text: "start",
    },
    {
      text: "working",
    },
    {
      text: "together",
    },
    {
      text: "!",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mr-20 mt-1 ">
      <p className="text-neutral-600 dark:text-gray-300 text-xs sm:text-base xl:text-lg xl:text-center ">
        Would you like to hear more about me and about all the projects I have
        been involved at work and personally?
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
