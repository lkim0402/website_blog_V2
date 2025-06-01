"use client";
import { Post } from "../../../types/post";
import { useEffect, useState } from "react";

import hljs from "highlight.js";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftFromLine } from "lucide-react";

export default function PostDetail() {
  const [error, setError] = useState("");
  const [post, setPost] = useState<Post>({
    _id: "",
    title: "",
    content: "",
    body: "",
    category: "",
    date: new Date().toISOString(),
    tags: [],
    updated_date: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Getting the id
  const { id } = useParams();

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }
      const data = await response.json();

      console.log(data);
      setPost({
        _id: data._id || "",
        title: data.title || "",
        content: data.content || "",
        body: data.body || "",
        category: data.category || "",
        date: data.date || new Date(),
        updated_date: data.updated_date || "",
        tags: data.tags || "",
        status: data.status || "",
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const highlightSyntax = () => {
    const blocks = document.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  };

  useEffect(() => {
    if (!post.body) return;

    // Create an observer instance
    const observer = new MutationObserver(() => {
      highlightSyntax();
    });

    // Start observing the container where your content is rendered
    const container = document.querySelector(".postContent"); // Match your container selector
    if (container) {
      observer.observe(container, {
        childList: true, //"Tell me when child elements are added/removed"
        subtree: true, //"Also watch all nested elements inside the container"
      });
    }

    highlightSyntax();

    // Cleanup
    return () => observer.disconnect();
  }, [post.body]);
  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div className="md:max-w-full mx-auto px-4 mt-10 text-[1rem]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4 md:gap-14">
          {/* Content - takes remaining space */}
          <div className="flex-1 min-w-0">
            {/* Back button above title */}
            <div className="mb-4 sticky top-10">
              <Link
                href={`/workshop`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full 
                bg-gray-100 hover:bg-gray-200 transition-colors 
                dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <ArrowLeftFromLine className="w-5 h-5" />
              </Link>
            </div>

            <div className="mb-8 space-y-6">
              <h1 className="text-4xl font-bold break-words">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-gray-200">
                {/* Post metadata items */}
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
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                {post.updated_date && (
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Updated:{" "}
                    {new Date(post.updated_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                )}
                <div className="flex flex-wrap gap-2">
                  {post.tags &&
                    post.tags.map((el, index) => (
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
              </div>
            </div>
            <hr className="h-px mt-3 mb-10  bg-gray-200 border-0" />
            <div
              className="postContent text-lg"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
