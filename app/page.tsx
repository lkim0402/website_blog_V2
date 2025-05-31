// "use client";

import FadeInPage from "../components/FadeInPage";
import { Cormorant } from "next/font/google";
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <FadeInPage>
      <div className="space-y-5 ">
        {/* section 1 - cover */}

        <section className="">
          <div className="my-15 text-left">
            <p className="text-6xl">Hi, I&apos;m Leejun Kim.</p>
            <p
              className={`text-4xl ${cormorant.className} mt-3 dark:text-blue-100`}
            >
              Full stack developer. Researcher. Artist.
            </p>
          </div>
        </section>

        {/* section 2 - Welcome section*/}
        <section>
          <div className="text-lg">
            <p className="text-2xl  mb-3 mt-3 ">
              👋 Welcome to my portfolio/blog!
            </p>
            <p>
              I&apos;m an undergraduate senior @ UW Seattle majoring in CS.
              I&apos;m interested in a lot of things, ranging from VR/AR,
              gamedev, computer graphics, AI/ML, etc.
            </p>
            <section className="mt-2">
              <div>Feel free to reach out anytime, happy to chat! ₍ᐢ. .ᐢ₎</div>
            </section>
          </div>
        </section>

        {/* section 3 - About this website*/}
        <section>
          <section className="mt-15 text-left">
            <p className="text-2xl   mb-3 mt-3 ">📝 About this website</p>
          </section>
          <div className="flex flex-col space-y-4">
            <p>
              🌱 I&apos;ve always wanted to start a website/blog on my own.
              It&apos;s only in March 2025 that I&apos;ve finally started to
              build & work on it - I&apos;m primarily inspired by{" "}
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
            </p>
            <p className="text-gray-500 dark:text-gray-200">
              🛠️ Tech stack: React, Tailwind CSS, Next.js, MongoDB driver/Atlas,
              Vercel/Render
            </p>
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
          </div>
        </section>

        {/* Recent posts */}
        {/* Recent projects */}

        {/* ending */}

        {/* </motion.section> */}
      </div>
    </FadeInPage>
  );
}
