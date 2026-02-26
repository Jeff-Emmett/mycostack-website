"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useEffect } from "react"

// Color stops: [scrollPos, bg-L, bg-C, bg-H, fg-L, fg-C, fg-H, accent-L, accent-C, accent-H]
// 8 sections: Hero → Legacy → Compost → Mycelium → Undernet → Anastomosis → Emergence → Network Map
// Gentler rainbow fade with lighter start, lower chroma for subtlety
const COLOR_STOPS: number[][] = [
  [0.0,  0.18, 0.015, 30,   0.88, 0.02, 80,   0.50, 0.10, 60 ],  // Hero: warm twilight (lighter)
  [0.10, 0.16, 0.018, 40,   0.86, 0.02, 80,   0.52, 0.10, 50 ],  // Legacy: warm earth
  [0.20, 0.15, 0.025, 50,   0.84, 0.03, 75,   0.55, 0.11, 45 ],  // Compost: amber earth
  [0.35, 0.18, 0.03,  150,  0.88, 0.03, 145,  0.55, 0.13, 155],  // Mycelium: forest green
  [0.48, 0.22, 0.025, 210,  0.90, 0.02, 200,  0.52, 0.10, 220],  // Undernet: deep teal
  [0.60, 0.45, 0.03,  160,  0.15, 0.02, 150,  0.60, 0.12, 145],  // Anastomosis: transition
  [0.78, 0.82, 0.025, 110,  0.15, 0.03, 100,  0.58, 0.12, 90 ],  // Emergence: golden light
  [0.92, 0.92, 0.015, 120,  0.12, 0.02, 100,  0.55, 0.13, 155],  // Network Map: canopy
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
