import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function QuestionLink({ link, text }: { link: string; text: string }) {
  return (
    <Link
      href={link}
      className="flex space-x-2 text-sm font-medium"
      target="_blank"
    >
      <span>{text}</span>
      <ExternalLink className="w-4" />
    </Link>
  )
}
