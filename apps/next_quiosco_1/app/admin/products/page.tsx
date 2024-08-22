import ProductPagination from "@/components/admin/products/ProductPagination";
import ProductSearchForm from "@/components/admin/products/ProductSearchForm";
import ProducTable from "@/components/products/ProducTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { PAGE_SIZE } from "@/src/utils/constants";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getPaginatedProducts(take = 10, skip = 0) {
  return await prisma.product.findMany({
    take,
    skip,
    include: {
      category: true
    }
  })
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getPaginatedProducts>>

interface ProductsPageProps {
  searchParams: {
    page: string
  }
}
export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const page = +searchParams.page
  if (isNaN(page) || page < 1) return redirect("/admin/products?page=1")

  const take = PAGE_SIZE
  const skip = PAGE_SIZE * (page - 1)

  // console.log(products[0], products[1])
  const productsPromise = getPaginatedProducts(take, skip);
  const totalProductsPromise = prisma.product.count();
  const [products, totalProducts] = await Promise.all([
    productsPromise,
    totalProductsPromise
  ])
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE)

  return (
    <>
      <Heading>
        Administrar Productos
      </Heading>

      <div className="flex flex-col gap-5 lg:justify-between lg:flex-row">
        <Link
          href={"/admin/products/new"}
          className="px-8 py-2 font-bold text-lg text-center w-full bg-amber-400 rounded-md cursor-pointer lg:w-auto"
        >
          Crear Producto
        </Link>

        <ProductSearchForm />

      </div>

      <ProducTable
        products={products}
      />

      <ProductPagination
        page={page}
        totalPages={totalPages}
      />
    </>
  )
}
