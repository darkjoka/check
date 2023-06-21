export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export type NavigationItem = {
  title: string
  href: string
  disabled?: boolean
}

export type NavigationConfig = {
  mainNavigation: NavigationItem[]
}

export type Difficulty = "easy" | "medium" | "hard" | ""
export type DifficultyNoEmpty = "easy" | "medium" | "hard"

export type Data = {
  title: string
  src: string
  difficulty: DifficultyNoEmpty
  type: string[]
  category: string
}
