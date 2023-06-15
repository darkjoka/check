import { navigationConfig } from "@/config/nav"
import { NavigationBar } from "@/components/navigation-bar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-start">
          <NavigationBar items={navigationConfig.mainNavigation} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
