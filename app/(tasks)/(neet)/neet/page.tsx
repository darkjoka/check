import { ProblemList } from "@/components/problem-list"

export default function Neet() {
  return (
    // make section longer than space available to prevent ui from shifting when accordion is opened
    <section className="h-screen">
      <h1 className="my-2 flex flex justify-center font-heading text-5xl">
        Neet
      </h1>
      <div className="container flex max-w-[64rem] flex-col">
        <ProblemList category="neet" />
      </div>
    </section>
  )
}
