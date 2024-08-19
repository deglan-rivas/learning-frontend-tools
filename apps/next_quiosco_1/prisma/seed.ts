// prisma no acepta el @ del ts, fácil si usará un js que usará el @ sí funcaría
// import { prisma } from "@/src/lib/prisma";
import { prisma } from "../src/lib/prisma";
import { categories } from "./data/categories";
import { products } from "./data/products";

async function main(): Promise<string> {
  await Promise.all([
    prisma.product.deleteMany(),
    prisma.category.deleteMany()
  ])

  // const x = await prisma.category.createMany({
  await prisma.category.createMany({
    data: categories
  })

  // insert muestra el {count:6} nomás
  // console.log(x)

  const categoriesDB = await prisma.category.findMany()
  const productsData = products.map(product => {
    return {
      ...product,
      categoryId: categoriesDB.find(category => category.slug === product.categoryId)!.id
      // categoryId: categoriesDB.find(category => category.slug === product.categoryId)?.id
    }
  })

  await prisma.product.createMany({
    data: productsData
  })

  return "Seeded successfully"
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