import { redirect } from "next/navigation";
import { auth } from "@/auth";
import CreatePostForm from "../../components/createPostForm";

const createPostPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex justify-center">
      <h1>Create Post</h1>
      <CreatePostForm />
    </div>
  );
};

export default createPostPage;
