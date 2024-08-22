import ProductSearchForm from "@/components/admin/products/ProductSearchForm";
import ProducTable from "@/components/products/ProducTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

interface SearchPageProps {
  searchParams: {
    search: string
  }
}

async function getProductsBySearch(search: string) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: search,
        mode: 'insensitive'
      }
    },
    include: {
      category: true
    }
  })
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const products = await getProductsBySearch(searchParams.search)
  // console.log(products)

  return (
    <>
      <Heading>
        Resultados de la búsqueda: {searchParams.search}
      </Heading>

      <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>
        <ProductSearchForm />
      </div>

      <ProducTable
        products={products}
      />
    </>
  )
}
