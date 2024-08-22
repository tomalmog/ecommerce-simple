import React from "react";
import { promises as fs } from "fs";
import CompleteCard from "./CompleteCard";

import styles from "./CardGrid.module.css";

export const CardGrid = async () => {
  const file = await fs.readFile(process.cwd() + "/warehouseInfo.json", "utf8");
  const data = JSON.parse(file);

  const items = data["items"];

  return (
    <div className={styles.cardGrid}>
      {items.map((item: any) => (
        <CompleteCard
          key={item.item_id}
          title={item.name}
          description={item.unit_price}
          content={item.category}
          footer={item.quantity + " in stock"}
        />
      ))}
    </div>
  );
};
