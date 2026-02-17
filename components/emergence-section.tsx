"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

const CARDS = [
  {
    title: "Regenerative Economics",
    body: "The Commons Stack proved that augmented bonding curves and conviction voting could fund the commons without extraction. Now we go further: mutual credit that flows like nutrients through soil. Quadratic funding that amplifies the grassroots. Generative ownership that creates benefits for all stakeholders.",
  },
  {
    title: "Sovereign Technology",
    body: "Community-owned servers. Open protocols. Software that serves its users. Hardware you can repair. Networks no corporation can capture. The tools of liberation, maintained by the communities that depend on them.",
  },
  {
    title: "Living Commons",
    body: "Michel Bauwens built the P2P Foundation Wiki — 25,000 pages of commons knowledge. That's the seed. Now we grow the forest: knowledge, tools, and infrastructure that belong to everyone. Not static archives but living, growing resources — tended by communities, freely shared across the mycelial web.",
  },
]

export function EmergenceSection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="section-reveal space-y-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            Emergence
          </h2>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto">
            What grows underground eventually breaks the surface.
          </p>
        </div>

        {/* Quote block */}
        <blockquote className="section-reveal max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl italic leading-relaxed opacity-80">
            &ldquo;The post-capitalist future is not a utopian fantasy. It is
            already growing, underground, in the networks we are building
            today.&rdquo;
          </p>
        </blockquote>

        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="section-reveal glass-card p-6 space-y-3"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="w-full h-0.5 mb-4"
                style={{ background: "var(--emergence-gold)" }}
              />
              <h3 className="font-serif text-xl font-semibold">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-75">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="section-reveal text-center space-y-4 max-w-xl mx-auto">
          <p className="text-base opacity-60">
            Building the{" "}
            <a
              href="https://post-appitalist.app"
              target="_blank"
              rel="noopener noreferrer"
              className="domain-link"
            >
              post-appitalist.app
            </a>
            lication layer for a regenerative economy. Tools that serve
            communities, not shareholders.
          </p>
          <p className="text-sm opacity-40">
            Sometimes the best way to see the future is to change your
            perspective. Stop{" "}
            <a
              href="https://trippinballs.lol"
              target="_blank"
              rel="noopener noreferrer"
              className="domain-link"
            >
              trippinballs.lol
            </a>{" "}
            and start building.
          </p>
        </div>
      </div>
    </section>
  )
}
