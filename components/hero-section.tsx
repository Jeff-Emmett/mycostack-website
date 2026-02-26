"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const TITLE = "MycoStack"

const QUIPS = [
  "(com)post-capitalism, growing alternatives",
  "routing nutrients, not profits",
  "the network beneath the network",
  "stop making money, start making sense",
  "building from beneath the surface",
  "the (post-app)lication layer for regeneration",
  "(you)r space, (you)r rules, (you)r data",
  "encrypted, entangled, evolving",
  "permaculture economies, pluralistic value",
  "peer for peer, people for planet",
  "voice for all, extraction for none",
  "design global, manufacture local",
  "funding flows where needed, not where hoarded",
  "the more we share, the more we have",
  "sovereign tech for sovereign communities",
  "composting the old, inoculating the new",
]

export function HeroSection() {
  const sectionRef = useSectionReveal()
  const [quipIndex, setQuipIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing")

  useEffect(() => {
    const quip = QUIPS[quipIndex]

    if (phase === "typing") {
      if (displayed.length < quip.length) {
        const timeout = setTimeout(() => {
          setDisplayed(quip.slice(0, displayed.length + 1))
        }, 35 + Math.random() * 25)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setPhase("holding"), 100)
        return () => clearTimeout(timeout)
      }
    }

    if (phase === "holding") {
      const timeout = setTimeout(() => setPhase("erasing"), 3000)
      return () => clearTimeout(timeout)
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 18)
        return () => clearTimeout(timeout)
      } else {
        setQuipIndex((prev) => (prev + 1) % QUIPS.length)
        setPhase("typing")
      }
    }
  }, [displayed, phase, quipIndex])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] flex flex-col items-center justify-center px-6 noise-overlay"
    >
      <div className="section-reveal max-w-4xl mx-auto text-center space-y-8">
        {/* Title with staggered emergence */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
          {TITLE.split("").map((letter, i) => (
            <span
              key={i}
              className="emerge-letter inline-block"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div
          className="emerge-letter space-y-3"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-base sm:text-lg md:text-xl font-serif font-light tracking-wide opacity-75">
            Rebooting the legacy of the Commons Stack.
            <br />
            Preserving the legacy of the P2P Foundation.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light tracking-wide opacity-80">
            The P4P (Peer-for-Peer) Movement, emerging from the soil.
          </p>
        </div>

        {/* Cycling terminal tagline */}
        <div
          className="emerge-letter font-mono text-sm sm:text-base opacity-70 h-6"
          style={{ animationDelay: "2s" }}
        >
          <span className="opacity-50">&gt;</span>{" "}
          {displayed}
          <span className="cursor-blink ml-0.5">_</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-hint">
        <ChevronDown className="w-6 h-6 opacity-40" />
      </div>
    </section>
  )
}
