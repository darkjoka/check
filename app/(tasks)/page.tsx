import { Recommendation } from "@/components/recommendation"
import { Revision } from "@/components/revision"

export default function Home() {
  return (
    <section>
      <div className="container mt-4 flex max-w-[65rem] flex-col">
        <h1 className="flex justify-center font-heading text-4xl">Revisions</h1>
        <Revision />
        <h1 className="mt-4 flex justify-center font-heading text-4xl">
          Recommendations
        </h1>
        <Recommendation />
      </div>
    </section>
  )
}
