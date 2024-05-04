"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Hey it's me!",
    designation: "Welcome to my portfolio, hope you really like it!",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

export function AnimatedTooltipPreview({ image, description }) {
  return (
    <div className="flex flex-row  items-center justify-center hover:scale-105 transition-transform duration-700 ">
      <AnimatedTooltip items={people} image={image} />
    </div>
  );
}
