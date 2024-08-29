import { PrismaClient } from '@prisma/client'
import { promises as fs } from "fs";

const prisma = new PrismaClient()




async function main() {
    const file = await fs.readFile(process.cwd() + "/warehouseInfo.json", "utf8");
    const data = JSON.parse(file);
  
    const items = data["items"];



    const item = await prisma.product.createMany({
    data: items

  })
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

