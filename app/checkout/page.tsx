import OrderForm from "@/components/OrderForm";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function PostsPage() {
  const user = await currentUser();

  const getUserByEmail = await prisma.user.findFirst({
    where: {
      email: user?.emailAddresses[0].emailAddress,
    },
  });

  const cart = await prisma.cart.findMany({
    where: {
      userId: getUserByEmail?.id,
    },
  });

  const getProductById = async (productId: string) => {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    return product?.title;
  };

  return (
    <>
      <div className="flex">
        <div className="w-[300px] ml-auto mr-10 my-10 border-black border-solid border-2 rounded-xl">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user
                ? cart.map((cartEntry) => (
                    <TableRow>
                      <TableCell>
                        {getProductById(cartEntry.productId)}
                      </TableCell>
                      <TableCell className="text-center">
                        {cartEntry.quantity}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>

        <div className="w-[300px] mr-auto ml-10 my-10 border-black border-solid border-2 rounded-xl p-8">
          <OrderForm userId={getUserByEmail?.id!} />
        </div>
      </div>
    </>
  );
}
