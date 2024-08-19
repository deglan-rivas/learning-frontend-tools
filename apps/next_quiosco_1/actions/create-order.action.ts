"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderSchema } from "@/src/schemas"

type Response = {
  errors?: string[],
  success?: string
}

export async function createOrder(data: unknown): Promise<Response> {
  const result = OrderSchema.safeParse(data)
  // console.log(result)

  if (!result.success) {
    return {
      errors: result.error.issues.map(issue => issue.message)
    }
  }

  try {
    // const x = await prisma.order.create({
    await prisma.order.create({
      data: {
        // ...result.data,
        to: result.data.to,
        total: result.data.total,
        orderProducts: {
          create: result.data.orders.map(item => ({
            productId: item.id,
            quantity: item.quantity
          }))
        }
      }
    })
    // console.log(x)

    return {
      success: "Order created successfully"
    }
  } catch (error) {
    console.log(error)
    return {
      errors: ["Something went wrong in db"]
    }
  }

}