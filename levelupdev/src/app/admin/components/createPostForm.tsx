"use client";

import { useState } from "react";

export default function CreatePostForm() {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postSlug, setPostSlug] = useState("");

  const handleCreatePost = () => {
    console.log("clicking on the create post");
    // create post
    console.log(postTitle, postDescription, postSlug);
  };

  return (
    <div>
      <h1>Create Post form</h1>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="postTitle"
        value={postTitle}
        className="border border-gray-300 p-2 text-black"
        onChange={(e) => setPostTitle(e.target.value)}
      ></input>

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        value={postDescription}
        className="border border-gray-300 p-2 text-black"
        onChange={(e) => setPostDescription(e.target.value)}
      ></textarea>

      <label htmlFor="slug">Slug</label>
      <input
        id="slug"
        name="slug"
        value={postSlug}
        className="border border-gray-300  text-black"
        onChange={(e) => setPostSlug(e.target.value)}
      ></input>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}
