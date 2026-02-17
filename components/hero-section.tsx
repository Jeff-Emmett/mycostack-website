"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"
import { ChevronDown } from "lucide-react"

const TITLE = "MycoStack"

export function HeroSection() {
  const sectionRef = useSectionReveal()

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
        <p
          className="emerge-letter text-xl sm:text-2xl md:text-3xl font-serif font-light tracking-wide opacity-80"
          style={{ animationDelay: "1.2s" }}
        >
          Rebooting the Commons Stack.
          <br />
          Growing from beneath.
        </p>

        {/* Lineage */}
        <p
          className="emerge-letter text-sm sm:text-base opacity-40 max-w-xl mx-auto"
          style={{ animationDelay: "1.5s" }}
        >
          Born from the P2P Foundation. Rooted in the legacy of Michel
          Bauwens. Powered by mycelial principles.
        </p>

        {/* Terminal tagline */}
        <div
          className="emerge-letter font-mono text-sm sm:text-base opacity-60"
          style={{ animationDelay: "2s" }}
        >
          <span className="opacity-50">&gt;</span> composting capitalism,
          growing alternatives
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
