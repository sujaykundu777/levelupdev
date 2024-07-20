import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Button } from "flowbite-react";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { getAllPosts } from "../../actions/octokit";
import { allPosts } from "contentlayer/generated";

const Admin = async () => {
  const session = await auth();

  const postsFromGithub = await getAllPosts();
  console.log("postsFromGithub", postsFromGithub);

  const postsFromContentlayer = allPosts;
  console.log("postsFromContentlayer", postsFromContentlayer);

  if (!session) {
    redirect("/login");
  }

  let posts = postsFromGithub
    .map((githubPost: any) => {
      let generatedPost = postsFromContentlayer.filter((generatedPost: any) => {
        return generatedPost._raw.sourceFileName == githubPost.name;
      })[0];

      return {
        ...githubPost,
        date: generatedPost.publishedAt,
        status: generatedPost ? "published" : "publising",
      };
    })
    .sort((a: any, b: any) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

  return (
    <div className="pt-20 pb-5 text-center justify-center items-center container mx-auto">
      <h1 className="text-white"> Admin Panel</h1>

      <Link href="/admin/posts/create">
        <Button> Create Post </Button>
      </Link>
      {posts.map((post: any, idx: number) => (
        <div key={idx} className="flex justify-center">
          <h2 className="text-white">{post.name}</h2>
          <Button> {post.status} </Button>
          <Button> Edit </Button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
