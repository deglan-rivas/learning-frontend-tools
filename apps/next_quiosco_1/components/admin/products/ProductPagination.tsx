import Link from "next/link"

interface ProductPaginationProps {
  page: number
  totalPages: number
}
export default function ProductPagination({ page, totalPages }: ProductPaginationProps) {
  const pages = new Array(totalPages).fill(0).map((_, i) => i + 1)
  return (
    <nav className='flex justify-center py-10'>
      {/* {page > 1 && ( */}
      {(
        <Link
          href={`/admin/products?page=${page - 1}`}
          className={`${page === 1 ? 'invisible' : ''} bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100`}
        >
          &laquo;
        </Link>
      )}

      {
        pages.map((currentPage) => (
          <Link
            key={currentPage}
            href={`/admin/products?page=${currentPage}`}
            className={`${page === currentPage ? 'font-bold bg-amber-500' : 'bg-white hover:bg-gray-100'} px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300`}
          >
            {currentPage}
          </Link>
        ))
      }

      {/* {page < totalPages && ( */}
      {(
        <Link
          href={`/admin/products?page=${page + 1}`}
          className={`${page === totalPages ? 'invisible' : ''} bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  )
}
