import Sidebar from "@/components/admin/Sidebar";
import ToastNotification from "@/components/ui/ToastNotification";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:flex">
        <aside className="md:w-72 md:h-screen bg-white">
          <Sidebar />
        </aside>

        <main className="md:flex-1 md:h-screen md:overflow-y-auto bg-gray-100 p-5">
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  )
}
