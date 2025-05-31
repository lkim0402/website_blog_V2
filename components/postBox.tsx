// import Link from "next/link";
import { Post } from "../types/post";
// import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostBox({
  _id,
  title,
  date,
  // updated_date,
  cover_image,
  tags,
}: Post) {
  return (
    <div
      className="group relative overflow-hidden
      border-2
      border-gray-200 dark:border-[#2e2e40]

      rounded-lg
      bg-white dark:bg-[#1e1e2f]

      flex flex-col

      h-[22rem] 
      min-w-[290px]
      
      align-center w-full max-w-sm mx-4

      "
    >
      {cover_image && (
        <Image
          src={cover_image}
          // src={`${cover_image}?fm=webp&q=80`} // for optimization
          alt={title}
          width={400}
          height={300}
          priority
          className="h-50 object-cover border-b-2 border-gray-300 dark:border-gray-700 "
        />
      )}

      {/* Content */}
      <section className="p-4 flex flex-col space-y-2">
        <Link href={`/post/${_id}`}>
          <h3
            className="text-xl font-semibold text-gray-800 dark:text-gray-100
                 transition-all duration-300 hover:scale-101

                line-clamp-2 "
          >
            {title}
          </h3>
        </Link>

        {/* Tags */}
        <div className="flex flex-row gap-2">
          {tags &&
            tags.map((el, index) => (
              <div
                key={index}
                className="px-2 py-1 rounded-md 
                  bg-blue-50 text-blue-700 
                  dark:bg-blue-950 dark:text-blue-300
                  text-xs 
                  font-medium"
              >
                #{el.tag}
              </div>
            ))}
        </div>
        <div
          className="text-sm shrink-0 flex flex-row 
        items-center text-gray-500 dark:text-gray-400 
        "
        >
          {/* <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>
            Published:{" "}
            <span className="font-medium">
              {new Date(date).toLocaleDateString()}
            </span>
          </p> */}
          <span className="flex items-center shrink-0">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {/* {updated_date && (
            <p>
              Updated:{" "}
              <span className="font-medium">
                {new Date(updated_date).toLocaleDateString()}
              </span>
            </p>
          )} */}
        </div>
      </section>
    </div>
  );
}
