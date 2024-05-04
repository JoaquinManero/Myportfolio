"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="   rounded-full flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Angular",
  },
  {
    quote: "React.js",
  },
  {
    quote: "Next.js",
  },
  {
    quote: "Figma",
  },
  {
    quote: "Node.js",
  },
  {
    quote: "Amazon Web Services",
  },
  {
    quote: "Express.js",
  },
  {
    quote: "HTML & CSS",
  },
  {
    quote: "MongoDB",
  },
  {
    quote: "Oracle",
  },
  {
    quote: "MySQL",
  },
  {
    quote: "Jenkins",
  },
  {
    quote: "Jira",
  },
  {
    quote: "Azure DevOps",
  },
  {
    quote: "Git",
  },
];
