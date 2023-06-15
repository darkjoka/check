import Link from "next/link"

import { siteConfig } from "@/config/site"
import { NavigationItem } from "@/types"

interface NavigationProps {
    items: NavigationItem[]
}

export function NavigationBar({ items }: NavigationProps) {
    return <div className="flex gap-6 md:gap-10">
        <Link href="/" className="space-x-2 md:flex items-center">
            <span>
                ☑️
            </span>
            <span>{siteConfig.name}</span>
        </Link>

        {
            items?.length ? (<nav className="gap-6 md:flex">
                {
                    items.map((item, index) => (
                        <Link key={index}
                            href={item.disabled ? "#" : item.href}>
                            {item.title}
                        </Link>))
                }
            </nav>)
                : null
        }

    </div>
}