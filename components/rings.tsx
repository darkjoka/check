import { describeArc } from "@/lib/utils"

const backdrops = ["#334155", "#475569", "#64748b"]
const levels = [60, 40, 20]

interface Rings {
  angle: number[]
}

export function Rings({ angle }: Rings) {
  return (
    <svg
      width="150"
      height="150"
      xmlns="http://www.w3.org/2000/svg"
      // style={{ backgroundColor: "green" }}
    >
      {levels.map((value, key) => {
        return (
          <path
            fill="none"
            stroke="hsl(214.3 31.8% 91.4%)"
            strokeWidth="10"
            strokeLinecap="round"
            d={describeArc(75, 75, value, 0, 359)}
            key={key}
          />
        )
      })}
      {levels.map((value, key) => {
        return (
          <path
            fill="none"
            stroke={backdrops[key]}
            strokeWidth="10"
            strokeLinecap="round"
            d={describeArc(75, 75, value, 0, angle[key])}
            key={key}
          />
        )
      })}
    </svg>
  )
}
