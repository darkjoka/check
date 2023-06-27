import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function QuestionLink({ link, text }: { link: string; text: string }) {
  return (
    <Link
      href={link}
      className="flex items-center space-x-2 text-sm font-normal"
      target="_blank"
    >
      <span>{text}</span>
      <ExternalLink className="w-4" />
    </Link>
  )
}
