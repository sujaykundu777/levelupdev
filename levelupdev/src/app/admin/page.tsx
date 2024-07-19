import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Admin = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  redirect("/admin/posts");
};

export default Admin;
