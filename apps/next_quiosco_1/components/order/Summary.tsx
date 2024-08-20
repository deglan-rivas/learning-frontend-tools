"use client"

import { createOrder } from "@/actions/create-order.action";
import { OrderSchema } from "@/src/schemas";
import { useStore } from "@/src/store";
import { formatCurrency } from "@/src/utils";
import { useMemo, useRef } from "react";
import { toast } from "react-toastify";
import OrderSlot from "./OrderSlot";

export default function Summary() {
  const { orders, clearOrder } = useStore()
  const total = useMemo(() => {
    return orders.reduce((total, item) => total + item.quantity * item.price, 0)
  }, [orders])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      to: formData.get('to'),
      total: total,
      orders: orders
    }

    // console.log(inputRef.current.value)
    const results = OrderSchema.safeParse(data)
    // console.log(results)

    if (!results.success) {
      results.error.issues.forEach(issue => toast.error(issue.message))
      return
    }

    const response = await createOrder(results.data)
    if (response?.errors) {
      response.errors.forEach(error => toast.error(error))
      return
    }

    toast.success('Orden creada exitosamente')
    clearOrder()
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <aside className="py-5 px-2 space-y-5 text-center md:w-72 md:h-screen lg:w-96 lg:h-screen lg:overflow-y-auto">
      <h1 className="text-4xl font-black">
        Mi Pedido
      </h1>

      {
        orders.length === 0
          ? (
            <p className="text-xl text-center my-5">
              No hay elementos en tu pedido
            </p>
          )
          : (
            <div className="space-y-5">
              {
                orders.map(order => (
                  <OrderSlot
                    key={order.id}
                    item={order}
                  />
                ))
              }
            </div>
          )
      }

      <p className="text-xl font-black">
        Total: {''}
        <span>
          {formatCurrency(total)}
        </span>
      </p>

      <form
        action={handleCreateOrder}
        className="space-y-5 pt-5"
      >
        <input
          type="text"
          name="to"
          className="w-full rounded-md px-5 py-2 bg-white border-gray-200 border"
          placeholder="Mr. John Doe"
          ref={inputRef}
        />
        <button
          type="submit"
          className="text-white bg-gray-900 px-5 py-2 rounded-md uppercase font-bold  hover:bg-black"
        >
          Agregar Pedido
        </button>
      </form>
    </aside>
  )
}