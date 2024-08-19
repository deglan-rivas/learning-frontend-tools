import Sidebar from "@/components/order/Sidebar";
import Summary from "@/components/order/Summary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return (
    // <div className='flex justify-between text-center'>
    <div className='md:flex md:justify-between'>
      <Sidebar />

      {/* <main className='flex-auto'> */}
      <main className='p-5 md:flex-1 md:h-screen md:overflow-y-scroll'>
        {children}
      </main>

      <Summary />
      <ToastNotification />
    </div>
  )
}
