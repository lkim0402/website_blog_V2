import { sectionDetails } from "@/data/types";
import Link from "next/link";

export default function SectionDetails({
  title,
  titleLink,
  date,
  subtitle,
  skills = [],
  description = [],
}: sectionDetails) {
  // skills, description is optional

  return (
    <div className="">
      <div>
        {/* <p className="font-bold ">{title}</p> */}
        <div
          className={`font-bold text-lg ${titleLink ? "cursor-pointer" : ""}`}
        >
          {titleLink ? (
            <Link
              href={titleLink}
              className="hover:text-zinc-400"
              title={titleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="transition-all duration-300 transform origin-left hover:scale-101">
                {title}
              </p>
            </Link>
          ) : (
            title
          )}
        </div>

        <div className=" border-l-3 border-gray-200 pl-7 mt-2.5">
          <div>
            {skills.length > 0 && description.length > 0 && (
              <div className=" space-y-32">
                {skills.map((skillSet, index) => (
                  <div key={index} className="mb-4">
                    {/* title (ex. Research Assistant) + date */}
                    <div
                      className={`flex flex-col md:flex-row justify-between ${
                        index > 0 ? "mt-9" : ""
                      }`}
                    >
                      <p className={`mb-1 font-bold `}>{subtitle[index]}</p>
                      <p>{date}</p>
                    </div>

                    {/* Displaying the skills */}
                    <ul className="list-none dark:text-blue-100  text-zinc-400 italic mb-3">
                      <li>{skillSet.join(", ")}</li>{" "}
                    </ul>

                    {/* displaying each skill */}
                    {description[index]?.map((desc, descIndex) => (
                      <ul key={descIndex} className="list-none mb-2">
                        <li>{desc}</li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
