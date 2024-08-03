import React from "react";

import { getDocuments } from "outstatic/server";

const GuidesPage: React.FC = async () => {
  const posts = await getData();
  console.log("posts >>>", posts);

  return (
    <div className="pt-2">
      <h1 className="my-20">Guides </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/guides/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuidesPage;

async function getData() {
  const posts = getDocuments("posts", ["title", "slug"]);

  return posts;
}
