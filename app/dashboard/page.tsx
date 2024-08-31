import Sidebar from "@/components/navigation/sidebar";
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
      <div className="">
        {/* <Sidebar></Sidebar> */}
        {orders.map((order) => (
          <OrderCard order={order} />
        ))}
      </div>
    </>
  );
}
