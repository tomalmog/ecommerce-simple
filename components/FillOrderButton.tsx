"use client";

import React from "react";
import { Button } from "./ui/button";
import prisma from "@/lib/db";

interface Props {
  orderId: string;
}

const FillOrderButton = ({ orderId }: Props) => {
  const onClick = () => {
    fetch("/api/order/fill_order", {
      method: "POST",
      body: JSON.stringify({ orderId: orderId }),
    });
  };

  return (
    <>
      <Button size="xs" className="btn btn-primary" onClick={onClick}>
        Order Filled
      </Button>
    </>
  );
};

export default FillOrderButton;
