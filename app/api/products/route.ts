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
    console.log(data);

    return NextResponse.json({});
}