// Original path: /app/(marketing)/guides/[slug]/page.tsx
import React from "react";
import { getDocumentBySlug, getDocuments } from "outstatic/server";
// import Markdown from "react-markdown";
import ArticleView from "@/app/components/Articles/ArticleView";

export const generateStaticParams = async () => {
  const posts = getDocuments("posts", ["slug"]);
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getDocumentBySlug("posts", params.slug, ["title"]);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const GuidesPostPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getData({ slug: slug as string });
  console.log("guides post >>>", post);

  //   const post: {
  //     content: string;
  //     slug: string;
  //     collection?: string | undefined;
  //     title?: string | undefined;
  //     status?: string | undefined;
  //     description?: string;
  //     coverImage?: string;
  //     publishedAt?: string | undefined;
  //     author?: {
  //         name?: string;
  //         picture?: string;
  //     };
  //     __outstatic?: {
  //         ...;
  //     } | undefined;
  // }
  interface PostDataProps {
    title?: string;
    slug: string;
    content: string;
    status?: string;
    description?: string;
    coverImage?: string;
    publishedAt?: string;
    author?: {
      name?: string;
      picture?: string;
    };
  }

  const PostData: PostDataProps = {
    title: post.title,
    slug: post.slug,
    content: post.content,
    status: post.status,
    description: post.description,
    coverImage: post.coverImage,
    publishedAt: post.publishedAt,
    author: post.author,
  };

  // convert markdown to html
  const content = post ? post.content : "";

  // const currentPost = {
  //   title: "Today is Saturday !!",
  //   publishedAt: "2024-08-03T15:51:40.638Z",
  //   slug: "today-is-saturday",
  //   author: {
  //     name: "Sujay Kundu",
  //     picture: "https://avatars.githubusercontent.com/u/10703200?v=4",
  //   },
  //   content:
  //     "\n" +
  //     "# Hello\n" +
  //     "\n" +
  //     "Where are you now ?\n" +
  //     "\n" +
  //     "![](/images/photo_2024-05-26_09-54-16-c3MT.jpg)\n" +
  //     "\n" +
  //     "### Welcome to this demo !!\n" +
  //     "\n" +
  //     "Normal",
  //   coverImage: "/images/photo_2024-05-26_09-54-20-IyMj.jpg",
  // };

  // const dummyPost = {
  //   title: "Post Title",
  //   slug: "/post-slug",
  //   category: [
  //     {
  //       categoryName: "Category Name1",
  //       categorySlug: "/category-slug-1",
  //     },
  //     {
  //       categoryName: "Category Name2",
  //       categorySlug: "/category-slug-2",
  //     },
  //   ],
  //   publishedAt: "2022-01-01",
  //   updatedAt: "2022-01-01",
  //   content: "Post Content",
  //   coverImage: {
  //     url: "/images/placeholder.jpg",
  //   },
  //   author: {
  //     name: "Author Name",
  //     picture: {
  //       url: "/images/placeholder.jpg",
  //       altText: "Author Image",
  //     },
  //     title: "Author Title",
  //     biography: "Author Biography",
  //   },
  // };
  return (
    <div>
      <ArticleView post={PostData} />
    </div>
  );
};
export default GuidesPostPage;

async function getData(params: { slug: string }) {
  const slug = params.slug;
  const post = getDocumentBySlug("posts", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);

  //   const content = await markdownToHtml(post.content || "");
  const content = post ? post.content : "";

  return {
    ...post,
    content,
    slug,
  };
}
