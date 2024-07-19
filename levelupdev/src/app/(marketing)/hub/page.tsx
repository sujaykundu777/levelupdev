import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const HubPage: React.FC = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="pt-2">
      <h1>Hub </h1>
      <p> Welcome {session?.user.name} </p>
      <Image
        src={session?.user.image || "images/default-avatar.png"}
        alt={session?.user.name || "User"}
        width={100}
        height={100}
      />

      <p>
        Sorry, but we are in the process of building this page, Coming Soon !!{" "}
        Learn Web Development with our free guides. We cover a wide range of
        topics, from beginner to advanced.
      </p>
    </div>
  );
};

export default HubPage;
