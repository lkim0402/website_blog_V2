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

    w-full 
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
        <h2 className="text-2xl font-bold text-indigo-400 dark:text-indigo-200">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-300">
          <span className=" dark:text-white dark:opacity-70">{date}</span>
          <span className="">|</span>
          <span className=" dark:text-white dark:opacity-70">{type}</span>
          <span className="">|</span>
          {links &&
            links.map((el, index) => {
              return (
                <Link
                  key={index}
                  href={el.url}
                  className="text-gray-800 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-200 hover:scale-105"
                >
                  [{el.name}]
                </Link>
              );
            })}
        </div>
        <span className="  italic text-gray-400 dark:text-gray-300">
          {skills}
        </span>
        <div className="py-2">
          <div className="">
            {explanation.map((el, index) => {
              return <p key={index}>{el}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
