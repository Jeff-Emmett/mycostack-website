"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

const PRINCIPLES = [
  {
    title: "Nutrient Cycling",
    body: "Resources flow where they're needed, not where they're hoarded. The Commons Stack pioneered augmented bonding curves and quadratic funding for the commons. MycoFi extends this into mycelial currencies that route value like fungi route nutrients — sensing scarcity, bridging gaps, feeding the weak to strengthen the whole.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="4" />
        <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
        <path d="M14 14l5 5M29 29l5 5M14 34l5-5M29 19l5-5" />
        <circle cx="24" cy="8" r="2" />
        <circle cx="24" cy="40" r="2" />
        <circle cx="8" cy="24" r="2" />
        <circle cx="40" cy="24" r="2" />
      </svg>
    ),
  },
  {
    title: "Mutual Aid",
    body: "Every node strengthens the network. Every network strengthens each node. The P2P Foundation called this commons-based peer production — contributory, needs-based collaboration as the third mode of production beyond state and market. In a mycelial system, there are no extractors — only participants in a web of reciprocal support.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="6" />
        <circle cx="32" cy="16" r="6" />
        <circle cx="24" cy="32" r="6" />
        <path d="M20 20l4 6M28 20l-4 6" />
        <path d="M16 22v4M32 22v4" />
      </svg>
    ),
  },
  {
    title: "Distributed Intelligence",
    body: "No central brain. No single point of failure. The Trusted Seed proved that conviction voting and consent-based governance could coordinate without hierarchy. Intelligence emerges from connection, from the ten thousand chemical conversations happening simultaneously across the network. Design global, manufacture local — cosmo-localism in practice.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="12" r="3" />
        <circle cx="12" cy="24" r="3" />
        <circle cx="36" cy="24" r="3" />
        <circle cx="18" cy="36" r="3" />
        <circle cx="30" cy="36" r="3" />
        <path d="M24 15v6M15 24h6M33 24h-6M20 34l4-10M28 34l-4-10M15 26l3 8M33 26l-3 8" />
      </svg>
    ),
  },
]

export function MyceliumSection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-4xl mx-auto space-y-20">
        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            The Mycelial Network
          </h2>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto">
            Three principles from the forest floor, applied to human systems
          </p>
        </div>

        {PRINCIPLES.map((principle, i) => (
          <div
            key={principle.title}
            className="section-reveal flex gap-8 items-start"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="shrink-0 opacity-50 hidden sm:block mt-1">
              {principle.icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                {principle.title}
              </h3>
              <p className="text-base leading-relaxed opacity-75">
                {principle.body}
              </p>
            </div>
            {i < PRINCIPLES.length - 1 && (
              <div className="hidden" />
            )}
          </div>
        ))}

        {/* Connecting line between principles - visual only */}
        <div className="section-reveal text-center space-y-3 pt-4">
          <p className="text-sm opacity-50 max-w-lg mx-auto">
            These are the protocols of{" "}
            <a
              href="https://mycofi.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="domain-link"
            >
              mycofi.earth
            </a>
            . The economics of interconnection, first practiced by fungi four
            hundred million years before capitalism. Read more about the
            philosophy at{" "}
            <a
              href="https://mycopunk.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="domain-link"
            >
              mycopunk.xyz
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
