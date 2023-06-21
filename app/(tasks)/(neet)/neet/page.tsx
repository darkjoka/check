import { ProblemList } from "@/components/problem-list"

export default function Neet() {
  return (
    // make section longer than space available to prevent ui from shifting when accordion is opened
    <section className="h-screen">
      <div className="container flex max-w-[64rem] flex-col">
        <ProblemList category="neet" />
      </div>
    </section>
  )
}
