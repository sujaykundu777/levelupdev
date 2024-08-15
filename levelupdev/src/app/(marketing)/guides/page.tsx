import React from "react";

import { getDocuments } from "outstatic/server";
import Link from "next/link";
import ArticleCard from "@/app/components/Articles/ArticleCard";
import ArticleList from "@/app/components/Articles/ArticlesList";
import { ArticleCardProps, ArticleProps } from "@/types/article";
import ArticlesList from "@/app/components/Articles/ArticlesList";

const GuidesPage: React.FC = async () => {
  const posts = await getData();
  console.log("posts >>>", posts);

  //  const cardData = {
  //    slug: post.slug,
  //    coverImageURL: post.coverImage,
  //    title: post.title,
  //    excerpt: "this is sample excerpt",
  //    publishedAt: post.publishedAt,
  //    authorPictureURL: "/images/placeholder.jpg",
  //    authorName: "John Doe",
  //    authorSlug: "/author-slug",
  //    authorImageAltText: "Author Image",
  //  };

  const dummyCardData = {
    slug: "/post-slug",
    coverImage: "/images/placeholder.jpg",
    title: "Post Title",
    description: "Post Excerpt",
    publishedAt: "2022-01-01",
    author: {
      picture: "/images/placeholder.jpg",
      name: "Author Name",
    },
    status: "published",
    content: "Post Content",
  };

  const postsData = posts.map((post) => {
    const postData: ArticleProps = {
      slug: post.slug,
      coverImage: post.coverImage,
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      author: {
        picture: post?.author?.picture,
        name: post.author?.name,
      },
      status: post?.status,
      content: post?.content,
    };
    return postData;
  });

  return (
    <div className="pt-2">
      <ArticleList title="Dev Guides" articles={postsData} />
    </div>
  );
};

export default GuidesPage;

async function getData() {
  const posts = getDocuments("posts", [
    "title",
    "slug",
    "coverImage",
    "publishedAt",
    "author",
    "excerpt",
  ]);

  return posts;
}
