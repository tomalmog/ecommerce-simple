import prisma from "@/lib/db";
import { Order } from "@prisma/client";
import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import FillOrderButton from "./FillOrderButton";

interface Props {
  order: Order;
}

const OrderCard = async ({ order }: Props) => {
  const orderItems = await prisma.orderItem.findMany({
    where: {
      orderId: order.id,
    },
  });

  async function getProductName(productId: string) {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    return product?.title;
  }

  return (
    <>
      <ScrollArea className="w-[400px] h-72 border-black border-solid border-2 rounded-xl">
        <div className="p-4 text-center">
          <p>Name: {order.name}</p>
          <p>Grade: {order.grade}</p>
          <p>Date: {order.neededForDate}</p>
          <FillOrderButton orderId={order.id}></FillOrderButton>

          <br />
          <br />
          <Separator />
          {orderItems.map((orderItem) => (
            <div>
              <p>
                {getProductName(orderItem.productId)} : {orderItem.quantity}
              </p>
              <Separator />
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default OrderCard;
