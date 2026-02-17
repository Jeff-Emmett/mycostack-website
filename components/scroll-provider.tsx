"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useEffect } from "react"

// Color stops: [scrollPos, bg-L, bg-C, bg-H, fg-L, fg-C, fg-H, accent-L, accent-C, accent-H]
const COLOR_STOPS: number[][] = [
  [0.0, 0.08, 0.02, 30, 0.85, 0.03, 80, 0.45, 0.12, 60],
  [0.15, 0.12, 0.04, 40, 0.82, 0.04, 80, 0.55, 0.15, 45],
  [0.3, 0.16, 0.05, 150, 0.88, 0.05, 145, 0.55, 0.18, 155],
  [0.5, 0.22, 0.04, 200, 0.9, 0.03, 200, 0.5, 0.14, 220],
  [0.65, 0.45, 0.06, 140, 0.15, 0.03, 150, 0.65, 0.18, 145],
  [0.8, 0.85, 0.04, 110, 0.15, 0.04, 100, 0.6, 0.16, 90],
  [0.92, 0.94, 0.02, 110, 0.12, 0.03, 100, 0.55, 0.18, 155],
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function lerpHue(a: number, b: number, t: number) {
  let diff = b - a
  if (diff > 180) diff -= 360
  if (diff < -180) diff += 360
  return ((a + diff * t) % 360 + 360) % 360
}

function interpolateColors(progress: number) {
  let i = 0
  for (; i < COLOR_STOPS.length - 1; i++) {
    if (progress <= COLOR_STOPS[i + 1][0]) break
  }
  const stop = COLOR_STOPS[i]
  const next = COLOR_STOPS[Math.min(i + 1, COLOR_STOPS.length - 1)]
  const range = next[0] - stop[0]
  const t = range > 0 ? Math.min(1, Math.max(0, (progress - stop[0]) / range)) : 0

  return {
    bg: `oklch(${lerp(stop[1], next[1], t).toFixed(3)} ${lerp(stop[2], next[2], t).toFixed(3)} ${lerpHue(stop[3], next[3], t).toFixed(1)})`,
    fg: `oklch(${lerp(stop[4], next[4], t).toFixed(3)} ${lerp(stop[5], next[5], t).toFixed(3)} ${lerpHue(stop[6], next[6], t).toFixed(1)})`,
    accent: `oklch(${lerp(stop[7], next[7], t).toFixed(3)} ${lerp(stop[8], next[8], t).toFixed(3)} ${lerpHue(stop[9], next[9], t).toFixed(1)})`,
  }
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const progress = useScrollProgress()

  useEffect(() => {
    const { bg, fg, accent } = interpolateColors(progress)
    const root = document.documentElement
    root.style.setProperty("--scroll-bg", bg)
    root.style.setProperty("--scroll-fg", fg)
    root.style.setProperty("--scroll-accent", accent)
    root.style.setProperty("--scroll-depth", String(progress))
  }, [progress])

  return <>{children}</>
}
