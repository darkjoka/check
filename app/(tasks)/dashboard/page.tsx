import { Categories } from "@/config/categories"
import { Dash, MiniDash } from "@/components/dash"
import { Dashcard } from "@/components/dash-card"
import { Previous } from "@/components/previous"
import { SummaryCard } from "@/components/summary-card"

export default function Dashboard() {
  return (
    <section>
      <div className="container flex flex-col"></div>
      <div className="container my-2 flex items-center justify-center">
        <h1 className="font-heading text-5xl">Dashboard</h1>
      </div>
      <div className="container mb-2 flex space-x-2">
        <div className="flex-[2_2_0%]">
          <div className="grid grid-cols-2 gap-2">
            <SummaryCard />
            <MiniDash />
          </div>
        </div>
        <div className="flex-1">
          <Previous />
        </div>
      </div>
      <Dash />
    </section>
  )
}
