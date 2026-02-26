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
            NoFi
          </h2>
          <p className="font-mono text-sm opacity-40">
            /no-fai/ &mdash; post-finance
          </p>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            The point was never to make money.
            <br />
            The point was always to make <em>change</em>.
          </p>
        </div>

        <div className="section-reveal max-w-3xl mx-auto space-y-6">
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              Finance was supposed to be a tool &mdash; a way to coordinate
              resources toward shared goals. Somewhere along the way, the tool
              became the master. We started measuring the health of communities
              by their balance sheets, the worth of projects by their returns,
              the value of people by their portfolios. The map ate the
              territory.
            </p>
            <p>
              <a
                href="https://nofi.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                NoFi
              </a>{" "}
              is the recognition that we need to think <em>past</em> finance
              entirely. Not anti-finance &mdash; post-finance. The question
              isn&rsquo;t &ldquo;how do we fund this?&rdquo; but &ldquo;how
              do we organize so that funding becomes irrelevant?&rdquo; How do
              we build systems where the flows of trust, knowledge, care, and
              resources make the extractive financial layer unnecessary?
            </p>
            <p>
              DeFi promised to decentralize finance. It mostly just made
              finance faster. ReFi promised to regenerate through finance. It
              mostly just made new financial instruments. NoFi asks: what if
              the revolution isn&rsquo;t in <em>how</em> we do finance, but in
              building the world where we no longer need it as the primary
              coordination mechanism?
            </p>
          </div>
        </div>

        <div className="section-reveal glass-card p-6 sm:p-8 max-w-3xl mx-auto space-y-4">
          <h4 className="font-serif text-lg font-semibold opacity-70 text-center">
            The progression
          </h4>
          <div className="grid gap-3 sm:grid-cols-4 font-mono text-sm text-center">
            <div className="space-y-1">
              <div className="font-serif text-base font-semibold not-italic opacity-40">
                TradFi
              </div>
              <div className="opacity-50 text-xs">
                Extract value. Concentrate wealth.
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-base font-semibold not-italic opacity-50">
                DeFi
              </div>
              <div className="opacity-50 text-xs">
                Decentralize the extraction.
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-base font-semibold not-italic opacity-60">
                ReFi
              </div>
              <div className="opacity-50 text-xs">
                Try to regenerate through it.
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-base font-semibold not-italic" style={{ color: "var(--scroll-accent)" }}>
                NoFi
              </div>
              <div className="opacity-70 text-xs">
                Transcend the need for it.
              </div>
            </div>
          </div>
        </div>

        <div className="section-reveal max-w-3xl mx-auto space-y-4">
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              In a mycelial economy, resources move by need, not by price.
              Trust is built through reciprocity, not collateral. Contribution
              is recognized through community memory, not token balances. The
              forest doesn&rsquo;t have a treasury &mdash; it has flows.
            </p>
            <p>
              NoFi doesn&rsquo;t mean no exchange. It means the exchange
              becomes embedded in relationships thick enough to hold it. It
              means building the social, technical, and ecological
              infrastructure so dense that the financial scaffolding can
              eventually be composted &mdash; returned to the soil, feeding
              what comes next.
            </p>
          </div>

          <blockquote className="pt-4 text-center">
            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed opacity-70">
              &ldquo;Stop making money. Start making sense.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
