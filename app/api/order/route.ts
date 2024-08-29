


import prisma from "@/lib/db";
import { CreateOrganization } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Cart} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, ) {

    const body = await request.json();
    const {userId}=body;
    const {values} = body;

    const createOrder = await prisma.order.create({
        data: {
            userId: userId,
            name: values.full_name,
            grade: values.grade,
            neededForDate: values.date,
            isFilled: false,
        }
    })

    function transformProduct(cartItem: Cart) {
        return {
            orderId: createOrder.id,
            productId: cartItem.productId,
            quantity: cartItem.quantity
        }
    }

    const orderItems = (await prisma.cart.findMany({
        where: {
            userId: createOrder.userId,
        }
    })).map((item) => transformProduct(item))

 
    const addOrderItems = await prisma.orderItem.createMany({
        data: orderItems
    })

    const deletePastCheckout = await prisma.cart.deleteMany({
        where: {
            userId: userId,
        }
    })
    
    

    revalidatePath("/checkout");
    return NextResponse.json({});
}

