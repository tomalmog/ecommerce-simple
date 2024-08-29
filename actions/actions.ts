"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

import { redirect } from 'next/navigation'
 
export async function navigate() {
    console.log("hello")
//   redirect(`/inventory/${data.get('10')}`)
  
}


