"use client";
import Link from "next/link";
import Image from "next/image";
import FadeInPage from "../components/FadeInPage";

export default function Home() {
  return (
    <FadeInPage>
      <div className="text-lg ">
        {/* section 1 - cover */}
        <section className="flex flex-col sm:flex-row gap-6">
          <div className="w-30 aspect-[3/4] relative">
            <Image
              src="/test.png"
              alt="test"
              fill
              className="object-cover rounded-md"
            />
          </div>
          {/* // the intro top part */}
          <div className="mt-4 text-left">
            <p className="font-bold text-[2rem]">Leejun Kim</p>
            <div className="text-gray-600 dark:text-indigo-200">
              <p>
                🌀🐚 CS major @ UW Seattle, focus on backend engineering +
                cloud, interest in AI
              </p>
              <div className="flex gap-2 underline dark:text-indigo-300">
                <Link
                  href="https://github.com/lkim0402"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/leejunkim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedln
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome section*/}
        <div className="flex flex-wrap 3xl:flex-nowrap ">
          <section>
            <section className="flex-auto min-w-[18rem] w-fit xl:w-3xl">
              <div className="">
                <p className=" font-bold mb-3 mt-3 text-[1.8rem] text-indigo-400 dark:text-indigo-200 ">
                  Hi there!
                </p>
                <div className="flex-col space-y-5">
                  <div>
                    <p>
                      I’m an undergraduate student at the University of
                      Washington studying CS. I’m more of a generalist, having
                      interest in lots of different areas at the same time.
                    </p>
                  </div>
                  <p>
                    Currently, I’m doing research in Modulabs in AI + Web3,
                    learning Java SpringBoot, and aiming for AWS Certified
                    Solutions Architect.
                  </p>
                </div>
              </div>
            </section>

            {/* Things I've tried/am interested in:*/}
            <section>
              <div className="mt-6 mb-5">
                <p className=" font-bold mb-1 text-[1.25rem]  ">
                  Things I’ve tried/am interested in:
                </p>
                <ul className="list-disc pl-6">
                  <li>Cloud - AWS CCP</li>
                  <li>AI/ML - hackathon project, internship </li>
                  <li>
                    full stack - various ongoing/finished personal projects (+
                    this website xD)
                  </li>
                  <li>VR/AR/XR - had an internship and a research via Unity</li>
                  <li>game dev - related, and also tried a game jam :)</li>
                </ul>
              </div>
            </section>
          </section>

          {/* the part i want to fix */}
          <section className="flex flex-wrap gap-5 mb-5 flex-1 ">
            {/* Some Facts */}
            <section className="flex-1 min-w-[20rem]">
              <div
                className="rounded-md  font-bold w-full text-[1.45rem] py-1 px-2 mb-4 bg-[#E5E4FF] dark:bg-[#cbc9f9] dark:text-black"
                style={{
                  background: "linear-gradient(to right, #fcd3ec, #d4e6ff)",
                }}
              >
                RANDOM FACTS
              </div>
              <ul className="list-disc pl-6">
                <li>
                  I’m from South Korea, but I grew up in the Philippines almost
                  my whole life
                </li>
                <li>
                  Used to play the piano for the local church for 5+ years
                </li>
              </ul>
            </section>

            {/* likes */}
            <section className="flex-1 min-w-[20rem]">
              <div
                className="rounded-md font-bold w-full text-[1.45rem] py-1 px-2 mb-4 bg-[#E5E4FF] dark:bg-[#cbc9f9] dark:text-black"
                style={{
                  background: "linear-gradient(to right, #fcd3ec, #d4e6ff)",
                }}
              >
                LIKES
              </div>
              <ul className="list-disc pl-6">
                <li>
                  Drawing (CSP/Procreate), music, writing, world building -
                  basically creating :)
                </li>
                <li>
                  Reading (programming, scifi, finance, essays, self-help)
                </li>
                <li>Organizing notes - usually obsidian, sometimes notion</li>
              </ul>
            </section>
          </section>

          {/* About this website*/}
        </div>
        <section className="rounded-md  py-7 px-6 mt-4 text-black bg-[#E5E4FF] dark:bg-[#cbc9f9]">
          <section className="text-left">
            <p className=" font-bold text-[1.2rem] mb-1 ">About this website</p>
          </section>
          <ul className="flex flex-col list-disc pl-6">
            <li>
              I’ve always wanted to start a website/blog on my own, because I
              think it’s one of the best ways to show/express yourself in this
              wide world. It’s only in March 2025 that I’ve finally started to
              build & work on it 🌱.
            </li>
            <li>
              I&apos;m primarily inspired by{" "}
              <a
                href="https://austinkleon.com/show-your-work/"
                className="underline text-blue-900 hover:text-blue-700 dark:text-blue-900 dark:hover:text-indigo-500 "
              >
                Show Your Work
              </a>{" "}
              and{" "}
              <a
                href="https://www.swyx.io/learn-in-public"
                className="underline text-blue-900 hover:text-blue-700 dark:text-blue-900 dark:hover:text-indigo-500"
              >
                Learn in Public
              </a>
              . I documented how I built this website in this{" "}
              <a
                href="https://www.leejunkim.com/post/67f4bb15c0b36b328779f8d4"
                className="underline text-blue-900 hover:text-blue-700 dark:text-blue-900 dark:hover:text-indigo-500"
              >
                post series
              </a>
              .
            </li>
            <li>
              🛠️ Tech stack: React, Tailwind CSS, Next.js, MongoDB driver/Atlas,
              Vercel/Render
            </li>
            {/* <p>
              Each category represents different aspects:
              <ul>
                <li>Projects</li>
                <li>Worshop</li>
                <li>Journal</li>
                <li>Books</li>
                <li>Mind</li>
              </ul>
            </p>
            <p>
              The difference between this website and my digital garden (the
              Mind section) is that{" "}
            </p> */}
          </ul>
        </section>

        {/* Recent posts */}
        {/* Recent projects */}

        {/* ending */}

        {/* </motion.section> */}
      </div>
    </FadeInPage>
  );
}
