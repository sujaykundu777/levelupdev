// Original path: /app/(marketing)/guides/[slug]/page.tsx
import React from "react";
import { getDocumentBySlug, getDocuments } from "outstatic/server";
import Markdown from "react-markdown";

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

  // convert markdown to html
  const content = post ? post.content : "";

  return (
    <div className="pt-2">
      <div className="my-20">Guides </div>
      <h1 className="my-20 text-white">{post.title}</h1>
      <div>
        <Markdown>{content}</Markdown>
      </div>
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
