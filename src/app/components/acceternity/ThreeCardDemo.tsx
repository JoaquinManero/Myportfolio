"use client";

import Image from "next/image";
import React from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:shadow-2xl  dark:shadow-emerald-500/[0.1] border-solid border-[1px] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto  max-sm:h-auto sm:h-auto sm:w-[30rem]  lg:h-[480px] rounded-[40px]  p-6 md:w-auto  ">
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={0}
          className="w-full flex items-center justify-center mt-4"
        >
          <Image
            src="/images/me.jpg"
            height="1000"
            width="1000"
            className="lg:h-96 lg:w-80  object-fill rounded-[40px] group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20"></div>
      </CardBody>
    </CardContainer>
  );
}
