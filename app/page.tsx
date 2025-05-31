// "use client";
import Link from "next/link";
import Image from "next/image";
import FadeInPage from "../components/FadeInPage";

export default function Home() {
  return (
    <FadeInPage>
      <div className="text-lg ">
        {/* section 1 - cover */}

        <section className="flex gap-6">
          <div className="w-30 h-40 relative">
            <Image
              src="/test.png"
              alt="test"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="mt-4 text-left">
            <p className="font-bold text-[2rem]">Leejun Kim</p>
            <div className="text-gray-600">
              <p>
                CS major @ UW, focus on backend engineering + cloud, interest in
                AI
              </p>
              <div className="flex gap-2 underline hover:">
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
        <section>
          <div className="">
            <p className=" font-bold mb-3 mt-3  text-indigo-400 ">Hi there!</p>
            <div className="flex-col space-y-5">
              <p>
                Welcome to my website! I'm an undergraduate student at the
                University of Washington studying CS. I’m more of a generalist,
                having interest in lots of different areas at the same time.
              </p>
              <p>
                Currently, I’m doing research in Modulabs in AI + Web3, learning
                Java SpringBoot, and aiming for AWS Certified Solutions
                Architect.
              </p>
            </div>
          </div>
        </section>

        {/* About this website*/}
        <section>
          <section className="mt-15 text-left">
            <p className=" font-bold text-[1.2rem] mb-3 mt-3 ">
              About this website
            </p>
          </section>
          <ul className="flex flex-col list-disc pl-6">
            <li>
              I've always wanted to start a website/blog on my own, because I
              think it’s one of the best ways to show/express yourself in this
              wide world. It's only in March 2025 that I've finally started to
              build & work on it 🌱.
            </li>
            <li>
              I&apos;m primarily inspired by{" "}
              <a
                href="https://austinkleon.com/show-your-work/"
                className="underline text-blue-900 hover:text-blue-700 dark:text-blue-100 dark:hover:text-sky-300"
              >
                Show Your Work
              </a>{" "}
              and{" "}
              <a
                href="https://www.swyx.io/learn-in-public"
                className="underline text-blue-900 hover:text-blue-700 dark:text-blue-100 dark:hover:text-sky-300"
              >
                Learn in Public
              </a>
              . I documented how I built this website in this{" "}
              <a
                href="https://www.leejunkim.com/post/67f4bb15c0b36b328779f8d4"
                className="underline text-blue-900 hover:text-blue-700 dark:text-blue-100 dark:hover:text-sky-300"
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
