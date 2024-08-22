"use client"

import { ProductSearchSchema } from "@/src/schemas"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function ProductSearchForm() {
  const router = useRouter()

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get('search')
    }

    const result = ProductSearchSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach((issue) => toast.error(issue.message))
      return
    }

    router.push(`/admin/products/search?search=${result.data?.search}`)
  }

  return (
    <form
      action={handleSearchForm}
      className="flex items-center"
    >
      <input
        type="text"
        name="search"
        className="px-4 py-2 flex-auto placeholder:text-gray-400 focus:-outline-offset-1"
        // className="px-4 py-2 flex-auto placeholder:text-gray-400 placeholder-green-600"
        placeholder="Eg. galleta"
      />
      <button
        type="submit"
        className="px-4 py-2 uppercase text-white bg-indigo-600"
      >
        Buscar
      </button>
    </form>
  )
}
