"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

export function NoFiSection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="section-reveal space-y-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            Sister Ecosystems
          </h2>
          <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto leading-relaxed">
            The MycoStack doesn&rsquo;t grow alone. It interweaves with
            parallel movements rethinking value, finance, and coordination
            from the ground up.
          </p>
        </div>

        <div className="section-reveal grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="glass-card p-5 space-y-3">
            <h3 className="font-serif text-lg font-semibold">
              <a
                href="https://nofi.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                NoFi
              </a>
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Post-finance. The point was never to make money &mdash; it was
              to make <em>change</em>. NoFi asks: what if we build
              coordination so dense that the financial scaffolding can be
              composted?
            </p>
            <div className="glass-card p-3 space-y-1 font-mono text-xs text-center">
              <div className="opacity-40">TradFi &rarr; DeFi &rarr; ReFi &rarr;</div>
              <div style={{ color: "var(--scroll-accent)" }}>NoFi</div>
              <div className="opacity-50">Transcend the need for it.</div>
            </div>
          </div>

          <div className="glass-card p-5 space-y-3">
            <h3 className="font-serif text-lg font-semibold">
              <a
                href="https://mycofi.earth"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                MycoFi
              </a>
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Mycelial finance &mdash; currencies that route value like fungi
              route nutrients. Sensing scarcity, bridging gaps, feeding the
              weak to strengthen the whole. Economics as ecology.
            </p>
          </div>

          <div className="glass-card p-5 space-y-3">
            <h3 className="font-serif text-lg font-semibold">
              <a
                href="https://defect.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                Defect.fi
              </a>
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Defecting from extractive finance. Naming the exit &mdash; the
              conscious choice to withdraw from systems that concentrate
              wealth and build alternatives that distribute it.
            </p>
          </div>
        </div>

        <blockquote className="section-reveal max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl italic leading-relaxed opacity-80">
            &ldquo;Stop making money. Start making sense.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
