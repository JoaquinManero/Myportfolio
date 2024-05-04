"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { ThreeDCardDemo } from "./acceternity/ThreeCardDemo";
import { AnimatedTooltipPreview } from "./acceternity/Three.tsx";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript/Typescript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Angular</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL & NoSQL Databases</li>
        <li>Jira & Azure DevOps</li>
        <li>Figma</li>
        <li>AWS</li>
        <li>Jenkins CI/CD</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          High School at{" "}
          <a
            className="underline text-blue-400"
            href="https://institucionescuti.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escuti Institution
          </a>{" "}
          (2012 - 2018)
        </li>
        <li>
          Information Systems Engineering at{" "}
          <a
            href="https://utn.edu.ar/es/"
            className="underline text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Technological University
          </a>{" "}
          (2019 - 2023)
        </li>
        <li>
          <a
            className="underline text-blue-400"
            href="https://britishschoolcba.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            British Culture
          </a>
          , English academy (2012 - 2018)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>Spanish: Native</li>
        <li>English: Advanced (C1)</li>
        <li>German: Basic </li>
      </ul>
    ),
  },
  {
    title: "Personal Competences",
    id: "competences",
    content: (
      <ul className="list-disc pl-2">
        <li>Leadership</li>
        <li>
          Ability to identify and address problems collaboratively, applying
          logical and creative methods to find effective solutions.
        </li>
        <li>
          Accustomed to working under pressure and meeting goals on time.
          Flexible, I adapt quickly to changing situations.
        </li>
        <li>I like to put all my effort into what I do.</li>
        <li>
          I listen to what others have to say about me on how to improve in what
          I do.
        </li>
        <li>
          Ability to understand customer needs and provide solutions that meet
          their expectations.
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 -mt-4">
        <li className="text-[14px] font-bold text-blue-300">
          Center for Research, Development and Transfer of Information Systems
          (CIDS) - <p className="text-xs ">Software Engineer</p>
          <p className="text-[10px] font-light text-white mt-0.5">
            Córdoba, Argentina (March 2022 - Present){" "}
          </p>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              Development of different web applications in TypeScript, using
              technologies such as Angular, React, Express.js, Node.js and
              Next.js.
            </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              Figma for the creation of intuitive and responsive interfaces.
            </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">Scrum Methodology </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              MongoDB and MySQL database management.
            </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              Use of Azure DevOps and Jira for version control and tracking.{" "}
            </p>
          </li>
          <li className="text-[14px] font-bold  ml-3 text-white">
            <p className="text-[10px] font-light">
              Proficient in AWS, Jenkins pipeline, CI/CD, Docker for streamlined
              development and deployment.{" "}
            </p>
          </li>
        </li>
        <li className="text-[14px] mt-2 font-bold text-blue-300">
          University of Exact, Physical and Natural Sciences (F.C.E.F. and N.)
          <p className="text-xs  font-bold ">PL/SQL Developer</p>
          <p className="text-[10px]  font-light text-white mt-0.5">
            Córdoba, Argentina (March 2018 - September 2018){" "}
          </p>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              Development and maintenance of databases in Microsoft Access and
              SQL for efficient management of crucial data.
            </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              Creation of complex SQL queries.{" "}
            </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">Office 365. </p>
          </li>
          <li className="text-[14px] font-bold ml-3 text-white">
            <p className="text-[10px] font-light">
              Maintenance and support of technological infrastructure, including
              troubleshooting and user assistance.{" "}
            </p>
          </li>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:py-40 sm:py-16 xl:px-16">
        <ThreeDCardDemo />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row ">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="-mt-2">
              <AnimatedTooltipPreview image="/images/me3.png" />
            </div>
          </div>
          <p className="text-base lg:text-[15px]">
            I am a 23 year old Software Engineer currently living in Argentina,
            Córdoba. Highly committed and passionate about programming. I have
            worked on several projects, ranging from small websites to complex
            web applications. I am always disposed to learn new technologies and
            improve my skills.
          </p>
          <div className="lg:flex lg:flex-row max-sm:flex max-sm:flex-col md:flex md:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("competences")}
              active={tab === "competences"}
            >
              {" "}
              Personal Competences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
