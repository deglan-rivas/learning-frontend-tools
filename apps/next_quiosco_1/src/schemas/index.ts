import { z } from "zod";
import { formatCurrency, MAX_QUANTITY, MIN_QUANTITY } from "../utils";

const MIN_TOTAL = 1
export const OrderSchema = z.object({
  to: z.string()
    .min(1, "Tu nombre es obligatorio"),
  // .min(1, { message: "Tu nombre es obligatorio" }),
  // .nonempty({ message: "Tu nombre es obligatorio" }),
  total: z.number()
    .min(1, `El total debe ser mayor a ${formatCurrency(MIN_TOTAL)}`),
  orders: z.array(z.object({
    id: z.string(),
    name: z.string(),
    quantity: z.number()
      .min(MIN_QUANTITY, `La cantidad mínima es ${MIN_QUANTITY}`)
      .max(MAX_QUANTITY, `La cantidad máxima es ${MAX_QUANTITY}`),
    price: z.number(),
    subtotal: z.number(),
  }))
})

export const OrderIdSchema = z.object({
  orderId: z.string().uuid()
})

export const ProductSearchSchema = z.object({
  search: z.string()
    .min(1, "La búsqueda no debe estar vacía")
})