"use client"

import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

interface CategoryItemProps {
  category: Category
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const params = useParams<{ category: string }>()
  // console.log(params)

  return (
    <Link
      key={category.id}
      // className={`${params.category === category.slug ? "bg-amber-400" : ""} flex justify-start items-center gap-4 ps-8 py-2`}
      className={`w-full flex items-center justify-start gap-4 p-5 border-b-2 border-gray-200 first-of-type:border-t-2 ${category.slug === params.category ? 'bg-amber-400' : ''}`}
      href={`/order/${category.slug}`}
    >
      <div className="w-16 h-16 relative">
        <Image
          src={`/categories/icon_${category.slug}.svg`}
          alt={`${category.slug}`}
          fill
        />
      </div>
      <p className="text-xl font-bold">
        {category.name}
      </p>
    </Link>
  )
}
