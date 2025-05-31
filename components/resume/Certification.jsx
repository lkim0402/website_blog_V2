"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Certification({ imgPath, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const OpenImage = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const CloseImage = () => {
    setIsAnimating(false);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  // The useEffect runs whenever the isAnimating state changes
  // (as indicated by the dependency array [isAnimating])
  useEffect(() => {
    if (isAnimating) {
      setOpacity(0); // Start fully transparent
      setTimeout(() => {
        setOpacity(0.8); // Fade to desired opacity
      }, 10);
    } else {
      setOpacity(0); // Fade out
    }
  }, [isAnimating]);

  return (
    <>
      {/* Certificate thumbnail */}
      <div className="relative w-fit group overflow-visible">
        <div className="p-2">
          <div
            className="relative transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={OpenImage}
          >
            <Image src={imgPath} width={300} height={500} alt={title} />
            <div className="absolute bottom-0 left-0 right-0 bg-blue-950 opacity-80 p-3 text-white z-10">
              <p className="text-center text-[1rem] md:text-xl">{title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with animation */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={CloseImage}
          style={{
            backgroundColor: `rgba(0, 0, 0, ${opacity})`,
            transition: "background-color 300ms",
          }}
        >
          <div
            className="relative max-w-3xl max-h-screen p-4 text-center transition-transform duration-300"
            style={{
              transform: isAnimating ? "scale(1)" : "scale(0.9)",
              opacity: isAnimating ? 1 : 0,
              transition: "transform 300ms, opacity 300ms",
            }}
          >
            <p className="text-lg mb-4 text-white">Click anywhere to exit</p>
            <Image
              src={imgPath}
              width={800}
              height={1000}
              alt={title}
              className="object-contain max-h-[70vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
