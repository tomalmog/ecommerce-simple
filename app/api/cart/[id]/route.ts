


interface IParams {
    id?: string;
}


export async function POST(request: Request, { params }: { params: IParams }) {

    const id = params.id;
    console.log({id});



}
