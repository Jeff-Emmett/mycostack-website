"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useEffect } from "react"

// Color stops: [scrollPos, bg-L, bg-C, bg-H, fg-L, fg-C, fg-H, accent-L, accent-C, accent-H]
// 9 sections: Hero → Legacy → Compost → Mycelium → Undernet → Anastomosis → NoFi → Emergence → Network Map
// Gentle rainbow hue rotation, staying dark through most of the journey,
// only lightening gradually at emergence/network map
const COLOR_STOPS: number[][] = [
  [0.0,  0.18, 0.015, 10,   0.88, 0.02, 10,   0.50, 0.08, 10 ],  // Hero: warm twilight
  [0.10, 0.16, 0.018, 40,   0.86, 0.02, 40,   0.52, 0.10, 40 ],  // Legacy: faded orange
  [0.18, 0.15, 0.025, 70,   0.84, 0.03, 70,   0.55, 0.10, 65 ],  // Compost: faded amber
  [0.30, 0.17, 0.03,  145,  0.88, 0.03, 145,  0.55, 0.12, 150],  // Mycelium: faded green
  [0.42, 0.20, 0.025, 230,  0.88, 0.02, 230,  0.52, 0.10, 225],  // Undernet: faded blue
  [0.52, 0.19, 0.025, 270,  0.87, 0.02, 270,  0.54, 0.10, 265],  // Anastomosis: faded indigo
  [0.62, 0.18, 0.02,  310,  0.86, 0.02, 310,  0.52, 0.09, 305],  // NoFi: faded magenta
  [0.75, 0.55, 0.025, 345,  0.92, 0.02, 345,  0.58, 0.10, 340],  // Emergence: faded rose, brightening
  [0.90, 0.88, 0.015, 30,   0.12, 0.02, 30,   0.55, 0.08, 25 ],  // Network Map: warm light
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
