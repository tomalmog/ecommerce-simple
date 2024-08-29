import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { NextResponse, NextRequest} from "next/server"


export async function GET() {
    return NextResponse.json({
        products: [
            {
                id: 1,
                name: "Laptop"
            },
            {
                id: 2,
                name: "Chair"
            },
        ],
    });
}

export async function POST(req: Request, res: NextResponse) {
    const data = await req.json();
    const {id} = data;
    console.log(id);

    // const user = getCurrentUser() 
    
    
   // const cart = prisma.cart.findFirst();

   


    const currentProducts: Product[] = await prisma.product.findMany( {
        where: {
            id: id
        }
    })

    // const updateProducts = await prisma.cart.create( {
    //     data: {
    //         products: currentProducts
    //     }
    // })

    // const updateProducts = await prisma.product.update( {
    //     data: {
           
    //     }
    // })

    console.log({currentProducts})





    return NextResponse.json({});
}

