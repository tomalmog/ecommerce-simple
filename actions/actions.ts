"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
            .replace(/\s+/g, "-")
            .toLowerCase(),
            content: formData.get("content") as string,
        },
    });

    revalidatePath("/posts");
}


interface cardInformation {
    title?: string;
    description?: string;
    content?: string;
    footer?: string;
    key?: string;
  }
  

export async function addToCart() {
    console.log("hello world");



}



export async function create() {
    console.log("test")
    
}
