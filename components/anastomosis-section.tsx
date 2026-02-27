"use client"

import { useEffect, useRef } from "react"
import { useSectionReveal } from "@/hooks/use-section-reveal"

export function AnastomosisSection() {
  const sectionRef = useSectionReveal()
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svg.querySelectorAll(".draw-line").forEach((el) => {
              el.classList.add("animate")
            })
            svg.querySelector(".merge-dot")?.classList.add("merge-pulse")
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-6 noise-overlay">
      <div className="mycelial-divider mb-12" />

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="section-reveal space-y-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            Anastomosis
          </h2>
          <p className="font-mono text-sm opacity-40">
            /uh-nas-tuh-MOH-sis/
          </p>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            When separate mycelial networks discover each other and merge,
            forming new connections. The moment distinct systems recognize their
            shared purpose and become one.
          </p>
        </div>

        {/* SVG Animation: Two networks merging */}
        <div className="section-reveal">
          <svg
            ref={svgRef}
            viewBox="0 0 800 300"
            className="w-full max-w-3xl mx-auto"
            fill="none"
          >
            {/* Left network */}
            <g>
              {/* Main trunk */}
              <path
                d="M60,150 Q120,130 180,145 Q240,155 290,140"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ animationDelay: "0s" }}
              />
              {/* Branch up */}
              <path
                d="M140,138 Q160,100 200,85 Q230,75 260,90"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ animationDelay: "0.3s" }}
              />
              {/* Branch down */}
              <path
                d="M180,145 Q200,180 240,195 Q270,205 300,190"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ animationDelay: "0.5s" }}
              />
              {/* Sub-branch */}
              <path
                d="M200,85 Q220,60 250,55"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ animationDelay: "0.7s" }}
              />
              {/* Small nodes */}
              <circle cx="60" cy="150" r="3" fill="var(--scroll-accent)" opacity="0.5" />
              <circle cx="180" cy="145" r="2.5" fill="var(--scroll-accent)" opacity="0.4" />
              <circle cx="200" cy="85" r="2" fill="var(--scroll-accent)" opacity="0.4" />
              <circle cx="240" cy="195" r="2" fill="var(--scroll-accent)" opacity="0.4" />
            </g>

            {/* Right network */}
            <g>
              {/* Main trunk */}
              <path
                d="M740,150 Q680,135 620,148 Q560,155 510,142"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ animationDelay: "0.2s" }}
              />
              {/* Branch up */}
              <path
                d="M660,140 Q640,105 600,90 Q570,78 540,92"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ animationDelay: "0.4s" }}
              />
              {/* Branch down */}
              <path
                d="M620,148 Q600,182 560,198 Q530,208 500,192"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ animationDelay: "0.6s" }}
              />
              {/* Sub-branch */}
              <path
                d="M600,90 Q580,62 550,58"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ animationDelay: "0.8s" }}
              />
              {/* Small nodes */}
              <circle cx="740" cy="150" r="3" fill="var(--scroll-accent)" opacity="0.5" />
              <circle cx="620" cy="148" r="2.5" fill="var(--scroll-accent)" opacity="0.4" />
              <circle cx="600" cy="90" r="2" fill="var(--scroll-accent)" opacity="0.4" />
              <circle cx="560" cy="198" r="2" fill="var(--scroll-accent)" opacity="0.4" />
            </g>

            {/* Merge connections (appear last) */}
            <g>
              <path
                d="M290,140 Q340,145 400,150"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ animationDelay: "1.8s" }}
              />
              <path
                d="M510,142 Q460,146 400,150"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ animationDelay: "1.8s" }}
              />
              <path
                d="M260,90 Q330,95 400,120"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
                style={{ animationDelay: "2.2s" }}
              />
              <path
                d="M540,92 Q470,95 400,120"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
                style={{ animationDelay: "2.2s" }}
              />
              <path
                d="M300,190 Q350,185 400,175"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
                style={{ animationDelay: "2.4s" }}
              />
              <path
                d="M500,192 Q450,185 400,175"
                className="draw-line"
                stroke="var(--scroll-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
                style={{ animationDelay: "2.4s" }}
              />
            </g>

            {/* Center merge point */}
            <circle
              cx="400"
              cy="150"
              r="0"
              className="merge-dot"
              fill="var(--scroll-accent)"
            />
          </svg>
        </div>

        <div className="section-reveal space-y-6 text-center max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed opacity-75">
            We are the connections between movements. Commons Stack, MycoFi, the
            Undernet — separate networks finding each other, merging, growing
            stronger together. The boundaries between projects dissolve. What
            remains is the shared mycelium.
          </p>
          <p className="text-base opacity-50">
            A space that belongs to its communities, not its platforms. Find{" "}
            <a
              href="https://yourspace.online"
              target="_blank"
              rel="noopener noreferrer"
              className="domain-link"
            >
              rSpace.online
            </a>{" "}
            and start anastomosing.
          </p>
        </div>
      </div>
    </section>
  )
}
