"use client";
// import * as motion from "motion/react-client";

// import Section from "../../components/resume/Section.jsx";
import Link from "next/link";
import SectionDetails from "../../components/resume/SectionDetails";
import Collapsible from "../../components/resume/Collapsible";
import Certification from "../../components/resume/Certification";
import FadeInPage from "../../components/FadeInPage";

// importing data
import { WorkDetails } from "@/data/workDetails";
import { activityDetails } from "@/data/activityDetails";
import { certDetails } from "@/data/certDetails";

export default function Resume() {
  return (
    <FadeInPage>
      <div className="flex flex-col">
        <div>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl mb-2">Leejun Kim</p>

            <Link
              href="/resume2025.pdf"
              target="_blank"
              className=" underline transition-all duration-300 transform hover:scale-110"
            >
              PDF ver.
            </Link>
          </div>
          {/* title */}

          <div className="mb-10 mt-2">
            <div className="text-2xl pb-2">Software Engineer💡</div>
            <p className="text-zinc-500 dark:text-blue-100">
              Full Stack, AI, Cloud, VR/AR/XR
            </p>
          </div>
        </div>

        {/* Education - using Collapsible */}
        <Collapsible title="Education" defaultOpen>
          <div>
            <div className="flex flex-col md:flex-row justify-between ">
              <p className="font-bold">University of Washington - Seattle</p>
              <p>Graduation date: 2026</p>
            </div>
            <p className="mb-3">B.S. Computer Science</p>
            <p className="italic text-zinc-400 dark:text-blue-100">
              Relevant Coursework: Deep Learning, Data Structures & Parallelism,
              Hardware/Software Interface, Foundations of Computing 1 & 2,
              Software Design & Implementation
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="font-bold ">Pierce College - Fort Steilacoom</p>
              <p>Graduation date: 2023</p>
            </div>
            <p className="mb-3">
              A.S. degree - Computer Science specialization
            </p>
            <p className="italic text-zinc-400 dark:text-blue-100">
              Relevant Coursework: Computer Science 1-2, Calc 1-3, Differential
              Equations, Linear Algebra, Physics 1-3, Chemistry
            </p>
          </div>
        </Collapsible>

        {/* Work Experience - using Collapsible */}
        <Collapsible title="Work Experience" defaultOpen>
          <div className="space-y-10">
            {WorkDetails.map((el) => {
              return <SectionDetails key={el.title} {...el} />;
            })}
          </div>
        </Collapsible>

        {/* Certs - using Collapsible */}
        <Collapsible title="Certifications" defaultOpen>
          <div className="font-bold text-lg">Professional Certifications</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {certDetails.map((el) => {
              return <Certification key={el.title} {...el} />;
            })}
          </div>
        </Collapsible>

        {/* Activities - using Collapsible */}
        <Collapsible title="Activities" defaultOpen>
          {/* Add your activities content here */}

          <div className="">
            {activityDetails.map((el) => {
              return <SectionDetails key={el.title} {...el} />;
            })}
          </div>
        </Collapsible>

        {/* Skills - using Collapsible */}
        <Collapsible title="Skills" defaultOpen>
          <div className="flex flex-col space-y-6 mb-4">
            <div>
              <p className="text-lg font-semibold">Languages</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=html,css,js,ts,python,cs,bash,latex"
                alt="Languages"
              />
            </div>

            <div>
              <p className="text-lg font-semibold">
                Frameworks / Libraries / Tools
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=react,nextjs,nodejs,express,tailwind,unity,aws,tensorflow,pytorch,linux,git,github"
                alt="Frameworks"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Productivity</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=obsidian,notion"
                alt="Tools"
              />
            </div>
          </div>
        </Collapsible>
      </div>
    </FadeInPage>
  );
}
