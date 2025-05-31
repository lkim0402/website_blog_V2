// "use client";
// import { useEffect, useState } from "react";
// import { Post } from "../../types/post";
// import PostBox from "../../components/postBox";
// import PageTitle from "../../components/PageTitle";

// export default function Workshop() {
//   const [error, setError] = useState("");

//   const [posts, setPosts] = useState<Post[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const callPost = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/posts`
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error, status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         setPosts(data);
//       } catch (error) {
//         if (error instanceof Error) {
//           setError(error.message);
//         } else {
//           console.log(error);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     callPost();
//   }, []);

//   return (
//     <div>
//       <PageTitle
//         title="Workshop"
//         description="Blog posts/writings about projects, devlogs, certifications, notes, etc."
//       />
//       {error ?? <div className="text-red-400">{error}</div>}
//       {isLoading ? (
//         <div className="italic text-gray-500 text-center">Loading...</div>
//       ) : (
//         <div>
//           {posts.length === 0 ? (
//             <p className="italic text-gray-500 text-center">
//               No posts available.
//             </p>
//           ) : (
//             <div
//               className="flex justify-center

//             "
//             >
//               <div
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
//               gap-10
//               justify-items-center"
//               >
//                 {posts
//                   .filter(
//                     (post) => post.category == "Workshop"
//                     // || post.category == "Journal"
//                     // || post.category == "Draft"
//                   )
//                   .map((el) => (
//                     <PostBox {...el} key={el._id} />
//                   ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

import { Post } from "../../types/post";
import PostBox from "../../components/postBox";
import PageTitle from "../../components/PageTitle";

export const revalidate = 30; // Recheck every 30 seconds

export default async function Workshop() {
  let posts: Post[] = [];

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
    <div>
      <PageTitle
        title="journal"
        description="personal thoughts, ideas, notes, etc."
      />
      {
        <div>
          {posts.length === 0 ? (
            <p className="italic text-gray-500 text-center">
              No posts available yet :)
            </p>
          ) : (
            <div
              className="flex justify-center

            "
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              gap-10
              justify-items-center"
              >
                {posts
                  .filter(
                    (post: Post) => post.category == "Journal"
                    // || post.category == "Workshop"
                    // || post.category == "Draft"
                  )
                  .map((post: Post) => (
                    <PostBox {...post} key={post._id} />
                  ))}
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
}
