import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Button } from "flowbite-react";
import Link from "next/link";
import { getAllPosts } from "../../services";

const Admin = async () => {
  const session = await auth();

  const allPosts = await getAllPosts();
  console.log("postsFromGithub", allPosts);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="pt-20 pb-5 text-center justify-center items-center container mx-auto">
      <h1 className="text-white"> Admin Panel</h1>

      <Link href="/admin/posts/create">
        <Button> Create Post </Button>
      </Link>
    </div>
  );
};

export default Admin;
