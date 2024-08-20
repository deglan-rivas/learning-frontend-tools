export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    // <h2 className="py-2 px-4 text-center font-bold text-2xl">
    <h2 className="my-10 text-center text-2xl">
      {children}
    </h2>
  )
}
