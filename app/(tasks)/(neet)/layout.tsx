import { neetConfig } from "@/config/neet"
import { NeetNavigation } from "@/components/neet-navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col gap-6 md:gap-10">
      <div className="container">
        <NeetNavigation items={neetConfig.mainNavigation} />
      </div>
      <section className="flex-1">{children}</section>
    </div>
  )
}
