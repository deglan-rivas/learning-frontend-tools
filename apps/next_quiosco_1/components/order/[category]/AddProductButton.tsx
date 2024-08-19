"use client"

import { useStore } from '@/src/store';
import { MAX_QUANTITY } from '@/src/utils';
import { Product } from '@prisma/client';

interface AddProductButtonProps {
  product: Product
}

export default function AddProductButton({ product }: AddProductButtonProps) {
  const { addProduct, orders } = useStore()
  const quantity = orders.find(order => order.id === product.id)?.quantity
  return (
    <button
      className="text-white bg-indigo-600 text-center uppercase py-2 rounded-md w-full font-bold cursor-pointer hover:bg-indigo-800 disabled:bg-indigo-400 disabled:cursor-not-allowed"
      disabled={quantity === MAX_QUANTITY}
      onClick={() => addProduct(product)}
    // onClick={() => console.log('ga')}
    >
      Agregar
    </button>
  )
}
