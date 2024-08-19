import { Product } from "@prisma/client";
import { create } from "zustand";
import { OrderItem } from "./types";
import { MAX_QUANTITY, MIN_QUANTITY } from "./utils";

interface Store {
  orders: OrderItem[];
  addProduct: (product: Product) => void;
  removeProduct: (id: Product["id"]) => void;
  incrementOne: (id: Product["id"]) => void;
  decrementOne: (id: Product["id"]) => void;
  clearOrder: () => void
}

export const useStore = create<Store>((set, get) => ({
  orders: [],
  addProduct: (product) => {
    const currentProduct = get().orders.find(order => order.id === product.id)
    const { image, categoryId, ...productToOrder } = product
    // let orders: OrderItem[] = get().orders

    if (!currentProduct) {
      const orders = [
        ...get().orders,
        {
          ...productToOrder, quantity: 1, subtotal: product.price
        }
      ]

      set({ orders })
      return
    }

    const orders = get().orders.map(order => {
      if (order.id !== product.id) return order
      if (order.quantity === MAX_QUANTITY) return order
      return {
        ...order,
        quantity: order.quantity + 1,
        subtotal: order.subtotal + order.price
      }
    })

    set({ orders })
  },
  removeProduct: (id) => set((state) => ({ orders: state.orders.filter(item => item.id !== id) })),
  incrementOne: (id) => {
    const orders = get().orders.map(order => {
      if (order.id !== id) return order
      if (order.quantity === MAX_QUANTITY) return order
      return {
        ...order,
        quantity: order.quantity + 1,
        subtotal: order.subtotal + order.price
      }
    })

    set({ orders })
  },
  decrementOne(id) {
    const orders = get().orders.map(order => {
      if (order.id !== id) return order
      if (order.quantity === MIN_QUANTITY) return order
      return {
        ...order,
        quantity: order.quantity - 1,
        subtotal: order.subtotal - order.price
      }
    })

    set({ orders })
  },
  clearOrder: () => set({ orders: [] })
}));