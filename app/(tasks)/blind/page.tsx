import { ProblemList } from "@/components/problem-list"

export default function Blind() {
  return (
    <section className="h-screen">
      <div className="container flex max-w-[64rem] flex-col">
        <ProblemList category="blind" />
      </div>
    </section>
  )
}
