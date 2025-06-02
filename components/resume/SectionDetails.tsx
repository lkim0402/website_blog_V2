import { sectionDetails } from "@/data/types";
import Image from "next/image";

export default function SectionDetails({
  title,
  titleLink,
  date,
  subtitle,
  skills = [],
  description = [],
  icon,
}: sectionDetails) {
  // Normalize subtitle to an array if it's a string
  const subtitleArray = Array.isArray(subtitle) ? subtitle : [subtitle];

  return (
    <div className="flex items-start gap-4 mb-2">
      {/* Icon */}
      {icon && (
        <div className="min-w-[48px] h-[48px] mt-1 hidden md:block">
          <Image
            src={icon}
            alt="logo"
            width={68}
            height={68}
            className="rounded-md"
          />
        </div>
      )}

      {/* Right content */}
      <div className="flex-1 md:ml-6">
        {/* Render each role (subtitle) */}
        {subtitleArray.map((role, index) => (
          <div key={index} className="mb-6">
            <div className="mb-4">
              {/* title + desc */}
              <div className="flex ">
                {icon && (
                  <div className="min-w-[48px] h-[48px] mt-1 md:hidden block mr-4">
                    <Image
                      src={icon}
                      alt="logo"
                      width={68}
                      height={68}
                      className="rounded-md"
                    />
                  </div>
                )}
                {/* Role title */}
                <div>
                  <p className="font-medium text-[1.45rem] dark:text-indigo-200">
                    {role}
                  </p>

                  {/* Company and Date (only show on first role) */}
                  {index === 0 && (
                    <div className="text-gray-600 dark:text-gray-300 mb-1">
                      {titleLink ? (
                        <a
                          href={titleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {title}
                        </a>
                      ) : (
                        title
                      )}{" "}
                      | {date}
                    </div>
                  )}
                </div>
              </div>
              {/* Skills */}
              {skills[index] && skills[index].length > 0 && (
                <p className="italic text-gray-400 dark:text-gray-300">
                  {skills[index].join(", ")}
                </p>
              )}
            </div>

            {/* Description */}
            {description[index] && description[index].length > 0 && (
              <ul className="list-none  space-y-1">
                {description[index].map((desc, descIdx) => (
                  <li key={descIdx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
