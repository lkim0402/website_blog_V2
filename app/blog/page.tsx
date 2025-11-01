import { Post } from "../../types/post";
import PostLink from "../../components/postBox";
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

  return (
    <FadeInPage>
      <div>
        <PageTitle
          title="Blogging"
          description="Posts/writings about projects, devlogs, certifications, notes, etc."
        />
        {
          <div>
            {posts.length === 0 ? (
              <p className="italic text-gray-500 text-center">
                No posts available.
              </p>
            ) : (
              <div className="flex flex-col justify-center">
                <div className="flex flex-row "></div>
                <div>
                  {posts
                    .filter(
                      (post: Post) =>
                        // post.category == "Workshop" ||
                        // post.category == "Journal"
                        post.category === "Workshop" &&
                        post.status === "Published"
                    )
                    .map((post: Post) => (
                      <PostLink {...post} key={post._id} />
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
