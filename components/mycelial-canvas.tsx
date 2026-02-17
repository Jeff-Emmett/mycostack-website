"use client"

import { useEffect, useRef } from "react"

interface Hypha {
  x: number
  y: number
  angle: number
  speed: number
  age: number
  maxAge: number
  parentX: number
  parentY: number
  depth: number
  branchCount: number
}

export function MycelialCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hyphaeRef = useRef<Hypha[]>([])
  const frameRef = useRef<number>(0)
  const trailCanvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create offscreen trail canvas for persistence
    const trailCanvas = document.createElement("canvas")
    const trailCtx = trailCanvas.getContext("2d")!
    trailCanvasRef.current = trailCanvas

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)

      trailCanvas.width = w * dpr
      trailCanvas.height = h * dpr
      trailCtx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    const w = () => canvas.width / (Math.min(window.devicePixelRatio || 1, 2))
    const h = () => canvas.height / (Math.min(window.devicePixelRatio || 1, 2))

    const createHypha = (
      x: number,
      y: number,
      angle: number,
      depth: number
    ): Hypha => ({
      x,
      y,
      angle,
      speed: 1.2 + Math.random() * 0.8 - depth * 0.15,
      age: 0,
      maxAge: 200 + Math.random() * 150 - depth * 20,
      parentX: x,
      parentY: y,
      depth,
      branchCount: 0,
    })

    // Seed initial hyphae from bottom
    const seedCount = Math.max(3, Math.floor(w() / 250))
    for (let i = 0; i < seedCount; i++) {
      const x =
        (w() / (seedCount + 1)) * (i + 1) + (Math.random() - 0.5) * 80
      hyphaeRef.current.push(
        createHypha(
          x,
          h() + 10,
          -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
          0
        )
      )
    }

    const getAccentColor = () => {
      return (
        getComputedStyle(document.documentElement)
          .getPropertyValue("--scroll-accent")
          .trim() || "oklch(0.55 0.18 155)"
      )
    }

    let lastSeed = 0

    const animate = () => {
      const width = w()
      const height = h()

      // Clear main canvas
      ctx.clearRect(0, 0, width, height)

      // Fade the trail canvas slowly
      trailCtx.fillStyle = "rgba(10, 8, 5, 0.008)"
      trailCtx.fillRect(0, 0, width, height)

      const accent = getAccentColor()
      const alive: Hypha[] = []

      for (const hypha of hyphaeRef.current) {
        hypha.age++
        if (hypha.age >= hypha.maxAge) continue

        // Save previous position
        const prevX = hypha.x
        const prevY = hypha.y

        // Random walk with upward bias
        hypha.angle += (Math.random() - 0.5) * 0.12
        // Gentle gravitropism (slightly toward vertical)
        hypha.angle += (-Math.PI / 2 - hypha.angle) * 0.003
        hypha.x += Math.cos(hypha.angle) * hypha.speed
        hypha.y += Math.sin(hypha.angle) * hypha.speed

        // Boundary wrapping
        if (hypha.x < -20) hypha.x = width + 20
        if (hypha.x > width + 20) hypha.x = -20

        // Opacity based on age and depth
        const ageRatio = hypha.age / hypha.maxAge
        const opacity = Math.max(
          0.05,
          (1 - ageRatio * 0.9) * (0.6 - hypha.depth * 0.08)
        )
        const lineWidth = Math.max(0.3, 2.5 - hypha.depth * 0.4 - ageRatio)

        // Draw on trail canvas for persistence
        trailCtx.strokeStyle = accent.replace(")", ` / ${opacity * 0.5})`)
        trailCtx.lineWidth = lineWidth
        trailCtx.lineCap = "round"
        trailCtx.beginPath()
        trailCtx.moveTo(prevX, prevY)
        trailCtx.lineTo(hypha.x, hypha.y)
        trailCtx.stroke()

        // Draw tip glow on main canvas
        if (ageRatio < 0.7) {
          ctx.fillStyle = accent.replace(")", ` / ${opacity * 0.4})`)
          ctx.beginPath()
          ctx.arc(hypha.x, hypha.y, lineWidth + 1, 0, Math.PI * 2)
          ctx.fill()
        }

        // Branching
        if (
          hypha.age > 25 &&
          hypha.age < hypha.maxAge * 0.7 &&
          hypha.branchCount < 3 &&
          hypha.depth < 5 &&
          Math.random() > 0.975
        ) {
          const branchAngle =
            hypha.angle + (Math.random() > 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.5)
          alive.push(createHypha(hypha.x, hypha.y, branchAngle, hypha.depth + 1))
          hypha.branchCount++
        }

        alive.push(hypha)
      }

      // Draw trail canvas behind
      ctx.drawImage(trailCanvas, 0, 0, width, height)

      // Cap and manage
      hyphaeRef.current = alive.length > 500 ? alive.slice(-400) : alive

      // Periodically seed new roots
      const now = Date.now()
      if (now - lastSeed > 3000 && alive.length < 350) {
        lastSeed = now
        const x = Math.random() * width
        hyphaeRef.current.push(
          createHypha(x, height + 10, -Math.PI / 2 + (Math.random() - 0.5) * 0.6, 0)
        )
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.55 }}
    />
  )
}
