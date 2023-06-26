import { describeArc } from "@/lib/utils"

const backdrops = ["#334155", "#475569", "#64748b"]
const levels = [60, 40, 20]

interface Ring {
  angle: number
}

export function Ring({ angle }: Ring) {
  return (
    <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        stroke="hsl(214.3 31.8% 91.4%)"
        strokeWidth="10"
        strokeLinecap="round"
        d={describeArc(75, 75, 60, 0, 359)}
      />

      <path
        fill="none"
        stroke="#334155"
        strokeWidth="10"
        strokeLinecap="round"
        d={describeArc(75, 75, 60, 0, angle)}
      />
    </svg>
  )
}
