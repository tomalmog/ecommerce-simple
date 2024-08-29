import React from "react";
import CompleteCard from "./CompleteCard";

import styles from "./CardGrid.module.css";
import prisma from "@/lib/db";

interface Props {
  takeAmount: number;
  skipAmount: number;
}

export const CardGrid = async ({ takeAmount, skipAmount }: Props) => {
  const products = await prisma.product.findMany({
    take: takeAmount,
    skip: skipAmount,
  });

  return (
    <div className={styles.cardGrid}>
      {products.map((product) => (
        <CompleteCard title={product.title} id={product.id} key={product.id} />
      ))}
    </div>
  );
};
