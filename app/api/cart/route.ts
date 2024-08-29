import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, ) {


    const user = await currentUser();

    const body = await request.json();
    const {id}=body;

    const getUserByEmail = await prisma.user.findUnique({
        where: {
            email: user?.emailAddresses[0].emailAddress
        }
    })

    
    const addItemToCart = await prisma.cart.upsert({
        where: {
            userId_productId: {
                userId: getUserByEmail?.id,
                productId: id,
            }
        },

       update: {
        quantity: {
            increment: 1,
        },
       },

       create: {
        userId:  getUserByEmail?.id,
        productId: id,
        quantity: 1
       }
    });

    
    revalidatePath("/checkout");
    return NextResponse.json({});
}

