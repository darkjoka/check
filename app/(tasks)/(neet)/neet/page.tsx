import { ProblemList } from "@/components/problem-list"

export default function Neet() {
  return (
    <section>
      <div className="container flex max-w-[64rem] flex-col">
        <ProblemList category="neet" />
      </div>
    </section>
  )
}
