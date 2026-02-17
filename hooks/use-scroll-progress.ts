"use client"

import { useState, useEffect, useCallback } from "react"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
    setProgress(Math.min(1, Math.max(0, scrollPercent)))
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [handleScroll])

  return progress
}
