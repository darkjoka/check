import React from "react"

//https://www.joshwcomeau.com/react/the-perils-of-rehydration/
export function useMounted() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
