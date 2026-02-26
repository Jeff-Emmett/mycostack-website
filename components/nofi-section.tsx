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
            The Ecosystem
          </h2>
          <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto leading-relaxed">
            The MycoStack doesn&rsquo;t grow alone. It interweaves with
            parallel movements rethinking value, finance, coordination, and
            knowledge from the ground up. Each ecosystem reinforces the
            others &mdash; the way mycorrhizal networks link distinct species
            into shared resilience.
          </p>
        </div>

        {/* Row 1: Root ecosystems */}
        <div className="section-reveal space-y-4">
          <h3 className="font-serif text-xl font-semibold opacity-70 text-center">
            Root Systems
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://commonsstack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  Commons Stack
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                The primary root. Token engineering, augmented bonding curves,
                conviction voting, and the Trusted Seed community &mdash; the
                tools and culture from which the MycoStack grows.
              </p>
            </div>

            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://wiki.p2pfoundation.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  P2P Foundation
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                25,000 pages of commons knowledge. Commons-based peer
                production, the partner state, cosmo-localism &mdash; the
                theoretical bedrock and the frontier ahead.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Economic ecosystems */}
        <div className="section-reveal space-y-4" style={{ transitionDelay: "0.1s" }}>
          <h3 className="font-serif text-xl font-semibold opacity-70 text-center">
            Economic Ecosystems
          </h3>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://mycofi.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  MycoFi
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Mycelial finance &mdash; currencies that route value like fungi
                route nutrients. Sensing scarcity, bridging gaps, feeding the
                weak to strengthen the whole. Economics as ecology.
              </p>
            </div>

            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://nofi.lol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  NoFi
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Post-finance. What if coordination becomes so dense that the
                financial scaffolding can be composted? Not anti-money &mdash;
                beyond the need for it.
              </p>
            </div>

            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://defect.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  Defect.fi
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Defecting from extractive finance. The conscious choice to
                withdraw from systems that concentrate wealth and build
                alternatives that distribute it.
              </p>
            </div>
          </div>

          <div className="glass-card p-3 space-y-1 font-mono text-xs text-center max-w-sm mx-auto">
            <div className="opacity-50">TradFi &rarr; DeFi &rarr; ReFi &rarr; MycoFi &rarr;</div>
            <div style={{ color: "var(--scroll-accent)" }}>NoFi</div>
            <div className="opacity-50">Transcend the need for it.</div>
          </div>
        </div>

        {/* Row 3: Cultural & infrastructure ecosystems */}
        <div className="section-reveal space-y-4" style={{ transitionDelay: "0.2s" }}>
          <h3 className="font-serif text-xl font-semibold opacity-70 text-center">
            Culture &amp; Infrastructure
          </h3>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://compostcapitalism.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  Compost Capitalism
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Decomposing extractive systems into nutrients for regeneration.
                The old economy isn&rsquo;t destroyed &mdash; it&rsquo;s
                composted into something that can sustain life.
              </p>
            </div>

            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://mycopunk.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  Mycopunk
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Building from beneath the surface. A cultural and philosophical
                movement that draws on fungi as a model for decentralized,
                resilient, regenerative systems.
              </p>
            </div>

            <div className="glass-card p-5 space-y-3">
              <h4 className="font-serif text-lg font-semibold">
                <a
                  href="https://undernet.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  The Undernet
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Community-owned infrastructure. Self-provisioned servers,
                encrypted mesh networks, open protocols &mdash; the network
                beneath the network.
              </p>
            </div>
          </div>
        </div>

        <blockquote className="section-reveal max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl italic leading-relaxed opacity-80">
            &ldquo;None of us are as resilient as all of us. The ecosystem
            is the unit of survival.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
