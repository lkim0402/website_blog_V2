"use client";
// import * as motion from "motion/react-client";

// import Section from "../../components/resume/Section.jsx";
// import Link from "next/link";
import SectionDetails from "../../components/resume/SectionDetails";
import Collapsible from "../../components/resume/Collapsible";
import Certification from "../../components/resume/Certification";
import FadeInPage from "../../components/FadeInPage";

// importing data
import { WorkDetails } from "@/data/workDetails";
import { educationDetails } from "@/data/educationDetails";
import { activityDetails } from "@/data/activityDetails";
import { certDetails } from "@/data/certDetails";

export default function Resume() {
  return (
    <FadeInPage>
      <div className="flex flex-col">
        {/* Education - using Collapsible */}

        {/* Work Experience - using Collapsible */}
        <Collapsible title="Experience" defaultOpen>
          <div className="space-y-10">
            {WorkDetails.map((el) => {
              return <SectionDetails key={el.title} {...el} />;
            })}
          </div>
        </Collapsible>

        <Collapsible title="Education" defaultOpen>
          <div>
            {educationDetails.map((el) => {
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
