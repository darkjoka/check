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
