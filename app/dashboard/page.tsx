import prisma from "@/lib/db";
import React from "react";

export default async function Home() {
  const orders = await prisma.order.findMany();

  const returnOrderItems = async (orderId: string) => {
    const orderItems = await prisma.orderItem.findMany({
      where: {
        orderId: orderId,
      },
    });
    return orderItems;
  };

  return (
    <>
      helo
      {orders.map((order) => {
        <p>hlasdo</p>;

        // <div className="w-[300px] ml-auto mr-10 my-10 border-black border-solid border-2 rounded-xl">

        //   {/* <p>{returnOrderItems(order.id)}</p> */}
        // </div>;
      })}
    </>
  );
}
