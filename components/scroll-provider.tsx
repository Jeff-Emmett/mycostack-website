"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useEffect } from "react"

// Color stops: [scrollPos, bg-L, bg-C, bg-H, fg-L, fg-C, fg-H, accent-L, accent-C, accent-H]
// Consistent mossy/ferny palette throughout — no brightening shifts.
// Background stays in the 0.20-0.24 range (dark forest floor).
// Light text throughout. Hue drifts gently through greens and teals.
const COLOR_STOPS: number[][] = [
  [0.0,  0.20, 0.03, 140,  0.93, 0.02, 130,  0.58, 0.12, 145],  // Hero: mossy green
  [0.10, 0.21, 0.035, 135,  0.93, 0.02, 135,  0.56, 0.13, 140],  // Legacy: deep fern
  [0.18, 0.22, 0.04, 130,  0.92, 0.02, 125,  0.55, 0.14, 130],  // Compost: warm moss
  [0.30, 0.22, 0.045, 150,  0.93, 0.02, 150,  0.58, 0.15, 155],  // Mycelium: forest green
  [0.42, 0.21, 0.04, 170,  0.93, 0.02, 170,  0.55, 0.13, 175],  // Undernet: deep teal-green
  [0.52, 0.22, 0.04, 160,  0.93, 0.02, 155,  0.57, 0.14, 160],  // Anastomosis: fern blend
  [0.62, 0.21, 0.035, 145,  0.92, 0.02, 140,  0.55, 0.13, 148],  // NoFi: returning green
  [0.75, 0.23, 0.04, 135,  0.93, 0.02, 130,  0.58, 0.14, 135],  // Emergence: bright moss
  [0.90, 0.22, 0.035, 145,  0.93, 0.02, 140,  0.56, 0.13, 150],  // Network Map: canopy green
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
