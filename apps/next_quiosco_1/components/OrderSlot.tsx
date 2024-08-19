"use client"

import { useStore } from "@/src/store"
import { OrderItem } from "@/src/types"
import { formatCurrency, MAX_QUANTITY, MIN_QUANTITY } from "@/src/utils"
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/solid"

interface OrderSlotProps {
  item: OrderItem
}

export default function OrderSlot({ item }: OrderSlotProps) {
  const { removeProduct, incrementOne, decrementOne } = useStore()

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{item.name} </p>

          <button
            type="button"
            onClick={() => removeProduct(item.id)}
          >
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {formatCurrency(item.price)}
        </p>
        <div className="flex mx-auto gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            type="button"
            disabled={item.quantity === MIN_QUANTITY}
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
            onClick={() => decrementOne(item.id)}
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-black ">
            {item.quantity}
          </p>

          <button
            type="button"
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
            disabled={item.quantity === MAX_QUANTITY}
            onClick={() => incrementOne(item.id)}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {''}
          <span className="font-normal">
            {formatCurrency(item.subtotal)}
          </span>
        </p>
      </div>
    </div>
  )
}
