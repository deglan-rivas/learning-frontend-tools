import ProductCard from "@/components/order/[category]/ProductCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

interface OrderCategoryPageProps {
  params: {
    category: string
  }
}

async function getProducts(categorySlug: string) {
  return await prisma.product.findMany({
    where: {
      category: {
        slug: categorySlug
      }
    }
  })
}

export default async function OrderCategoryPage({ params }: OrderCategoryPageProps) {
  const products = await getProducts(params.category)
  // console.log(products)

  return (
    <>
      <Heading>
        Elige y personaliza tu pedido
      </Heading>

      <div className="grid gap-4 items-start grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
