import { ProjectType } from "@/data/projectData";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Link from "next/link";

export default function Project({
  title,
  date,
  type,
  imgList,
  links,
  skills,
  explanation,
}: ProjectType) {
  return (
    <div
      className="flex flex-col 
    h-auto 
    min-w-[290px]
     mx-4
    
    align-center 

    w-full max-w-lg
    "
    >
      <div className="relative">
        <Carousel className="w-full max-w-full border-2 border-gray-200 dark:border-none rounded-lg overflow-hidden">
          <CarouselContent className="mx-1.6">
            {imgList.map((img, index) => (
              <CarouselItem key={index} noPadding>
                <div key={index} className="aspect-[13/9] relative w-full ">
                  <Image
                    src={img}
                    alt={`${title} - image ${index + 1}`}
                    fill
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Project details below the carousel */}
      <div className="space-y-2 px-2 mt-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-wrap gap-2 ">
          <span className="text-gray-600 dark:text-white dark:opacity-70">
            {date}
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-600 dark:text-white dark:opacity-70">
            {type}
          </span>
          <span className="text-gray-600">|</span>
          {links &&
            links.map((el, index) => {
              return (
                <Link
                  key={index}
                  href={el.url}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-200 hover:scale-105"
                >
                  [{el.name}]
                </Link>
              );
            })}
        </div>
        <span className=" text-gray-500 italic dark:text-blue-200">
          {skills}
        </span>
        <div className="py-2">
          <ul className="list-disc ml-4">
            {explanation.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
