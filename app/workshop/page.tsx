import { Post } from "../../types/post";
import PostBox from "../../components/postBox";
import PageTitle from "../../components/PageTitle";
import FadeInPage from "../../components/FadeInPage";
// import { Tag } from "@/data/types";
// import TagFilterWrapper from "components/TagFilterWrapper";
// import React, { useState } from "react";

export const revalidate = 30; // Recheck every 30 seconds

export default async function Workshop() {
  let posts: Post[] = [];
  // let tags: Tag[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    console.log("fetched posts in workshop/page");
    posts = await response.json();
  } catch (e) {
    if (e instanceof Error) {
      console.log("Failed to fetch posts: ", e);
    }
  }

  // try {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tags`);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error, status: ${response.status}`);
  //   }
  //   console.log("fetched tags in workshop/page");
  //   const json = await response.json();
  //   console.log("API response:", json);
  //   tags = json.tags ?? [];
  // } catch (e) {
  //   if (e instanceof Error) {
  //     console.log("Failed to fetch posts: ", e);
  //   }
  // }

  return (
    <FadeInPage>
      <div>
        <PageTitle
          title="Workshop"
          description="blog posts/writings about projects, devlogs, certifications, notes, etc"
        />
        {
          <div>
            {posts.length === 0 ? (
              <p className="italic text-gray-500 text-center">
                No posts available.
              </p>
            ) : (
              <div className="flex flex-col justify-center">
                <div className="flex flex-row ">
                  {/* <TagFilterWrapper /> */}
                </div>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              gap-10
              justify-items-center"
                >
                  {posts
                    .filter(
                      (post: Post) =>
                        // post.category == "Workshop" ||
                        // post.category == "Journal"
                        post.category === "Workshop" &&
                        post.status === "Published"
                    )
                    // .filter((post) =>
                    //   activeTags.length === 0
                    //     ? true
                    //     : post.tags?.some((t) =>
                    //         activeTags.some((active) => active.id === t.id)
                    //       )
                    // )
                    .map((post: Post) => (
                      <PostBox {...post} key={post._id} />
                    ))}
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </FadeInPage>
  );
}
