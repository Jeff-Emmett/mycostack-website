"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

const CARDS = [
  {
    title: "Break Down",
    body: "Old systems don't disappear — they decompose. Capitalism's waste becomes the substrate for what grows next. Every collapsing institution releases nutrients back into the commons.",
  },
  {
    title: "Transform",
    body: "Mycelium turns death into life. We turn extractive protocols into regenerative ones. The same energy that powered exploitation can power mutual aid — if we know how to compost it.",
  },
  {
    title: "Nourish",
    body: "What's composted feeds what's growing. Every broken system contains the nutrients for its successor. The question isn't whether the old world will decompose — it's what we grow in its place.",
  },
]

export function CompostSection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-20 px-6 noise-overlay">
      <div className="mycelial-divider mb-12" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            The Compost Layer
          </h2>
          <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto">
            Decomposing extractive systems into nutrients for regeneration
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="section-reveal glass-card p-6 space-y-3"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="w-full h-0.5 mb-4"
                style={{ background: "var(--compost-amber)" }}
              />
              <h3 className="font-serif text-xl font-semibold">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-85">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="section-reveal text-center text-base opacity-75 max-w-xl mx-auto">
          This is{" "}
          <a
            href="https://compostcapitalism.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-link"
          >
            compost capitalism
          </a>{" "}
          — the art of breaking down what no longer serves, so that what comes
          next can thrive.
        </p>
      </div>
    </section>
  )
}
