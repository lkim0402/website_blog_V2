"use client";

import { useState } from "react";
import Section from "./Section";

export default function Collapsible({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-3">
      <div className="">
        <button
          className="transition-all disabled:pointer-events-none cursor-pointer w-full flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          title={`${isOpen ? "Click to close" : "Click to expand"}`}
        >
          <div className="flex-grow text-left  text-indigo-400 dark:text-indigo-300 mb-8">
            <Section title={title} />
          </div>

          {/* the triangle icon*/}
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
