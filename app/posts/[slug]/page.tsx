import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

export default async function PostPage({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <>
      <h1 className="text-4xl">{post.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
