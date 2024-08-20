import { promises as fs } from "fs";

import React from "react";

interface User {
  id: string;
  name: string;
}

const FileReader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const file = await fs.readFile(process.cwd() + "/warehouseInfo.json", "utf8");
  const data = JSON.parse(file);

  const items = JSON.stringify(data["items"]);

  return (
    <>
      <p>{items}</p>
    </>
  );
};

export default FileReader;
