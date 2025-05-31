"use client";

import { useState } from "react";
import Section from "./Section";

export default function Collapsible({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <div className="border-b-2 border-gray-300 my-5">
        <button
          className="transition-all disabled:pointer-events-none cursor-pointer w-full flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          title={`${isOpen ? "Click to close" : "Click to expand"}`}
        >
          <div className="flex-grow text-left ">
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
        className={`space-y-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
