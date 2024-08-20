"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderIdSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"

interface Response {
  errors?: string[]
  success?: string
}

export async function completeOrder(formData: FormData): Promise<Response> {
  // console.log(formData.get("order_id"))
  const data = {
    orderId: formData.get("order_id")
  }

  const result = OrderIdSchema.safeParse(data)
  // console.log(JSON.stringify(response, null, 2))
  if (!result.success) {
    return {
      errors: result.error.issues.map((issue) => issue.message)
    }
  }

  try {
    await prisma.order.update({
      where: {
        id: result.data.orderId
      },
      data: {
        isDone: true,
        doneAt: new Date(Date.now())
      }
    })

    revalidatePath("/admin/orders")

    return {
      success: "Orden completada correctamente"
    }

  } catch (error) {
    console.log(error)
    return {
      errors: ["No se pudo completar la orden en la DB"]
    }
  }
}