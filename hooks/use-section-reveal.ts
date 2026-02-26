"use client"

import { useEffect, useRef } from "react"

export function useSectionReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    )

    const revealElements = el.querySelectorAll(".section-reveal")
    revealElements.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  return ref
}
