// import Link from "next/link";
import { Post } from "../types/post";
// import React from "react";
import Link from "next/link";

export default function PostBox({
  _id,
  title,
  date,
}: // tags,
Post) {
  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {/* Date */}
        <div
          className="
        basis-[6.5rem] shrink-0 grow-0
         text-gray-600
         microsoftFont"
        >
          {formatDate(new Date(date))}
        </div>

        {/* Content */}
        <section className="underline decoration-dotted">
          <Link href={`/post/${_id}`}>
            <h3
              className="text-gray-800 dark:text-gray-100
            transition-all duration-300 hover:scale-101
            line-clamp-2 "
            >
              {title}
            </h3>
          </Link>
        </section>
      </div>

      {/* Tags */}
      {/* <div className="flex flex-row gap-2">
        {tags &&
          tags.map((el, index) => (
            <div
              key={index}
              className="px-2 py-1  
                  bg-indigo-100 text-indigo-700 
                  dark:bg-indigo-950 dark:text-indigo-300
                  text-xs 
                  font-medium"
            >
              #{el.tag}
            </div>
          ))}
      </div> */}
    </div>
  );
}
