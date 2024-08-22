import { addToCart, createPost } from "@/actions/actions";
import AddToCartButton from "@/components/AddToCartButton";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <>
      <h1>All Posts</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="flex items-center justify-between px-5"
              href={`/posts/${post.slug}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <form
        action={createPost}
        className="flex flex-col items-center gap-y-5 pt-24 text-center"
      >
        <input type="text" name="title" className="bg-slate-400" />

        <textarea name="content" className="bg-slate-400"></textarea>

        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          Create Post
        </button>
      </form>
    </>
  );
}
