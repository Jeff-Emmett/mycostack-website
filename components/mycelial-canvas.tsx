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

interface Spore {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  radius: number
}

export function MycelialCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hyphaeRef = useRef<Hypha[]>([])
  const sporesRef = useRef<Spore[]>([])
  const frameRef = useRef<number>(0)
  const trailCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  })

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

    // Mouse/touch tracking for interactive effects
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX
        mouseRef.current.y = e.touches[0].clientY
        mouseRef.current.active = true
      }
    }
    const onMouseLeave = () => {
      mouseRef.current.active = false
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("mouseleave", onMouseLeave)

    const w = () => canvas.width / Math.min(window.devicePixelRatio || 1, 2)
    const h = () => canvas.height / Math.min(window.devicePixelRatio || 1, 2)

    const createHypha = (
      x: number,
      y: number,
      angle: number,
      depth: number
    ): Hypha => ({
      x,
      y,
      angle,
      speed: 1.0 + Math.random() * 0.6 - depth * 0.1,
      age: 0,
      maxAge: 250 + Math.random() * 200 - depth * 15,
      parentX: x,
      parentY: y,
      depth,
      branchCount: 0,
    })

    const createSpore = (x: number, y: number): Spore => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 - 0.3,
      life: 0,
      maxLife: 60 + Math.random() * 80,
      radius: 1 + Math.random() * 2,
    })

    // Seed initial hyphae from bottom and sides
    const seedCount = Math.max(4, Math.floor(w() / 200))
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
    // Seed a couple from sides
    for (let i = 0; i < 2; i++) {
      const fromLeft = Math.random() > 0.5
      hyphaeRef.current.push(
        createHypha(
          fromLeft ? -10 : w() + 10,
          h() * (0.4 + Math.random() * 0.4),
          fromLeft ? -0.2 + Math.random() * 0.4 : Math.PI - 0.2 + Math.random() * 0.4,
          0
        )
      )
    }

    const getAccentColor = () => {
      return (
        getComputedStyle(document.documentElement)
          .getPropertyValue("--scroll-accent")
          .trim() || "oklch(0.55 0.13 155)"
      )
    }

    let lastSeed = 0
    let lastSporeEmit = 0

    const animate = () => {
      const width = w()
      const height = h()

      // Clear main canvas
      ctx.clearRect(0, 0, width, height)

      // Fade the trail canvas slowly
      trailCtx.fillStyle = "rgba(8, 18, 10, 0.006)"
      trailCtx.fillRect(0, 0, width, height)

      const accent = getAccentColor()
      const mouse = mouseRef.current
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

        // Mouse attraction: hyphae gently curve toward cursor
        if (mouse.active) {
          const dx = mouse.x - hypha.x
          const dy = mouse.y - hypha.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 300 && dist > 20) {
            const targetAngle = Math.atan2(dy, dx)
            let angleDiff = targetAngle - hypha.angle
            if (angleDiff > Math.PI) angleDiff -= Math.PI * 2
            if (angleDiff < -Math.PI) angleDiff += Math.PI * 2
            hypha.angle += angleDiff * 0.015 * (1 - dist / 300)
          }
        }

        hypha.x += Math.cos(hypha.angle) * hypha.speed
        hypha.y += Math.sin(hypha.angle) * hypha.speed

        // Boundary wrapping
        if (hypha.x < -20) hypha.x = width + 20
        if (hypha.x > width + 20) hypha.x = -20

        // Opacity based on age and depth
        const ageRatio = hypha.age / hypha.maxAge
        const opacity = Math.max(
          0.05,
          (1 - ageRatio * 0.9) * (0.6 - hypha.depth * 0.06)
        )
        const lineWidth = Math.max(0.3, 2.5 - hypha.depth * 0.35 - ageRatio)

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

        // Draw faint connections between nearby hyphae tips
        if (ageRatio < 0.5 && hypha.depth < 3) {
          for (const other of alive) {
            if (other === hypha) continue
            const ox = other.x - hypha.x
            const oy = other.y - hypha.y
            const od = Math.sqrt(ox * ox + oy * oy)
            if (od < 80 && od > 10) {
              const connOpacity = 0.06 * (1 - od / 80)
              ctx.strokeStyle = accent.replace(")", ` / ${connOpacity})`)
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(hypha.x, hypha.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
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

      // Spore particles
      const now = Date.now()
      // Emit spores near mouse
      if (mouse.active && now - lastSporeEmit > 150) {
        lastSporeEmit = now
        sporesRef.current.push(
          createSpore(
            mouse.x + (Math.random() - 0.5) * 40,
            mouse.y + (Math.random() - 0.5) * 40
          )
        )
      }

      // Emit ambient spores occasionally
      if (now - lastSporeEmit > 800 && sporesRef.current.length < 30) {
        lastSporeEmit = now
        sporesRef.current.push(
          createSpore(Math.random() * width, Math.random() * height)
        )
      }

      // Update and draw spores
      const aliveSpores: Spore[] = []
      for (const spore of sporesRef.current) {
        spore.life++
        if (spore.life >= spore.maxLife) continue

        spore.x += spore.vx
        spore.y += spore.vy
        spore.vx *= 0.98
        spore.vy *= 0.98

        const lifeRatio = spore.life / spore.maxLife
        const sporeOpacity = Math.sin(lifeRatio * Math.PI) * 0.3
        const sporeRadius = spore.radius * (1 - lifeRatio * 0.5)

        ctx.fillStyle = accent.replace(")", ` / ${sporeOpacity})`)
        ctx.beginPath()
        ctx.arc(spore.x, spore.y, sporeRadius, 0, Math.PI * 2)
        ctx.fill()

        aliveSpores.push(spore)
      }
      sporesRef.current = aliveSpores

      // Mouse glow effect
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 120
        )
        gradient.addColorStop(0, accent.replace(")", " / 0.06)"))
        gradient.addColorStop(1, accent.replace(")", " / 0)"))
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw trail canvas behind
      ctx.drawImage(trailCanvas, 0, 0, width, height)

      // Cap and manage
      hyphaeRef.current = alive.length > 500 ? alive.slice(-400) : alive

      // Periodically seed new roots
      if (now - lastSeed > 2500 && alive.length < 400) {
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
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("mouseleave", onMouseLeave)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ zIndex: 0, opacity: 0.6, pointerEvents: "none" }}
    />
  )
}
