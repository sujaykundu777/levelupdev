import React from "react";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
// import { mdxComponents } from "../../components/MdxComponents";
// import { useMDXComponent } from "next-contentlayer2/hooks";

export const metadata = {
  title: "Levelupdev - Blog",
  description: "Weekly challenges and community news",
  languages: {
    "en-US": "/en-US",
  },
  keywords: ["levelupdev", "blog", "web development community"],
  category: "technology",
};

function PostCard(post: Post) {
  // const MDXContent = useMDXComponent(post?.body.code);
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className=" text-lime-500 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {post && post.date ? format(parseISO(post.date), "LLLL d, yyyy") : ""}
      </time>
      <p>{post.description}</p>
      {/* <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}
      {/* <div className="[&>*]:mb-3 [&>*:last-child]:mb-0">
        <MDXContent components={mdxComponents} />
      </div> */}
    </div>
  );
}

const BlogPage: React.FC = async () => {
  const posts = allPosts.sort((a, b) =>
    a.date && b.date ? compareDesc(new Date(a.date), new Date(b.date)) : 0
  );

  return (
    <div className="pt-2">
      <section className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
        <div className="mx-auto max-w-xl py-8">
          <h1 className="mb-8 text-center text-2xl  text-lime-500">
            Levelupdev - Blog
          </h1>
          <h2 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-400 dark:text-gray-300 sm:text-2xl md:text-2xl">
            Recent Posts
          </h2>

          <div className="mb-8 text-center">
            {!posts.length && "No posts found."}
          </div>

          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
