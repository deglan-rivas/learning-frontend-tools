import { prisma } from "@/src/lib/prisma";
import Logo from "../ui/Logo";
import CategoryItem from "./CategoryItem";

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function Sidebar() {
  const categories = await getCategories()
  // console.log(categories)

  return (
    // <div className="bg-white">
    <aside className="md:w-72 md:h-screen bg-white text-center">
      {/* <Image
        width={300}
        height={300}
        src="/logo.svg"
        alt="logo"
      /> */}
      <Logo />

      {
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))
      }
    </aside>
  )
}