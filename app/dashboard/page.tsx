import OrderCard from "@/components/OrderCard";
import prisma from "@/lib/db";
import React from "react";

export default async function Home() {
  const orders = await prisma.order.findMany({
    where: {
      isFilled: false,
    },
  });

  return (
    <>
      {orders.map((order) => (
        <OrderCard order={order} />
      ))}
    </>
  );
}
