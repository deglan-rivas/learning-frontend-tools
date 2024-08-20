import OrderCard from "@/components/admin/orders/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrders() {
  return await prisma.order.findMany({
    where: {
      isDone: false
    },
    include: {
      // orderProducts: true
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })
}

type OrdersWithProducts = Awaited<ReturnType<typeof getPendingOrders>>
export type OrderWithProducts = OrdersWithProducts[number]

export default async function AdminOrders() {
  const pendingOrders = await getPendingOrders()
  pendingOrders[0].id
  // console.log(JSON.stringify(pendingOrders, null, 2))

  return (
    <>
      <Heading>
        Administrar Órdenes
      </Heading>

      {pendingOrders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {pendingOrders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">
          No hay ordenes Pendientes
        </p>
      )}
    </>
  )
}
