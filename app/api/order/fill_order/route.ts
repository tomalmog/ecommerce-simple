


import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, ) {


    console.log("testting")

    const body = await request.json();
    const {orderId} = body;

    const fillOrder = await prisma.order.update({
          where: {
            id: orderId,
          },
    
          data: {
            isFilled: true,
          },
        });
    
    revalidatePath("/dashboard");
    return NextResponse.json({});
}

