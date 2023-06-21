import { ProblemList } from "@/components/problem-list"

export default function NeetAll() {
  return (
    <section className="h-screen">
      <div className="container flex max-w-[64rem] flex-col">
        <ProblemList category="neet all" />
      </div>
    </section>
  )
}
