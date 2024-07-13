import React from "react";
import { auth } from "@/auth";
import TopNav from "../components/topNav";

const BlogPage: React.FC = async () => {
  const session = await auth();
  return (
    <div className="h-full scroll-smooth focus:scroll-auto">
      <TopNav user={session?.user} />
      <div className="pt-2">
        <h1>Blog </h1>
        <p>
          Sorry, but we are in the process of building this page, Coming Soon !!
          Welcome to our blog. We write about web development, programming, and
          other topics. We are passionate about sharing our knowledge with the
          community. We hope you enjoy our articles.
        </p>
        <h2>Latest Articles</h2>
      </div>
    </div>
  );
};

export default BlogPage;
