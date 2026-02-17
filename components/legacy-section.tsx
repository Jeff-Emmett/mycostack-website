"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

export function LegacySection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            The Roots
          </h2>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto">
            Every network grows from somewhere. Ours grows from the Commons
            Stack, the P2P Foundation, and the broader commons movement.
          </p>
        </div>

        {/* P2P Foundation */}
        <div className="section-reveal max-w-3xl mx-auto space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            The P2P Foundation
          </h3>
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              The{" "}
              <a
                href="https://wiki.p2pfoundation.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                P2P Foundation Wiki
              </a>
              , started by Michel Bauwens (1958&ndash;2024) and shaped by
              hundreds of contributors, documents the emerging landscape of
              peer-to-peer collaboration and commons-based alternatives. Over
              25,000 pages of case studies, theoretical frameworks, policy
              proposals, and practical guides &mdash; an open knowledge base
              that continues to inform projects worldwide.
            </p>
            <p>
              Out of this work came key frameworks:{" "}
              <strong>commons-based peer production</strong>, the{" "}
              <strong>partner state</strong>, and{" "}
              <strong>cosmo-localism</strong> (&ldquo;design global, manufacture
              local&rdquo;). These ideas didn&rsquo;t belong to any one person
              &mdash; they emerged from a network of researchers, practitioners,
              and communities building alternatives in the open.
            </p>
          </div>
        </div>

        {/* Three modes */}
        <div className="section-reveal glass-card p-6 sm:p-8 max-w-3xl mx-auto">
          <h4 className="font-serif text-lg font-semibold mb-4 opacity-70">
            Three Modes of Production
          </h4>
          <div className="grid gap-4 sm:grid-cols-3 font-mono text-sm">
            <div className="space-y-1">
              <div className="opacity-40">01</div>
              <div className="font-serif text-base font-semibold not-italic">
                State / Hierarchy
              </div>
              <div className="opacity-60">Top-down coordination</div>
            </div>
            <div className="space-y-1">
              <div className="opacity-40">02</div>
              <div className="font-serif text-base font-semibold not-italic">
                Market / Exchange
              </div>
              <div className="opacity-60">
                Price-coordinated transactions
              </div>
            </div>
            <div className="space-y-1">
              <div className="opacity-40">03</div>
              <div className="font-serif text-base font-semibold not-italic">
                Commons / P2P
              </div>
              <div className="opacity-60">
                Contributory, needs-based collaboration
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-50">
            MycoStack lives in the third mode &mdash; and builds the tools to
            make it thrive.
          </p>
        </div>

        {/* Commons Stack history */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.15s" }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            The Commons Stack
          </h3>
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              The{" "}
              <a
                href="https://commonsstack.org"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                Commons Stack
              </a>{" "}
              was born from this intellectual tradition. Its mission:{" "}
              <em>fund and govern the commons</em>. Through pioneering work in
              token engineering, augmented bonding curves, and conviction
              voting, the Commons Stack and its{" "}
              <strong>Trusted Seed</strong> community developed regenerative
              funding mechanisms for commons infrastructure.
            </p>
            <p>
              But tools alone aren&rsquo;t enough. The Commons Stack taught us
              that technology must be wrapped in culture &mdash; in shared
              values, governance practices, and communities of care. The
              Trusted Seed wasn&rsquo;t just a token-holder registry; it was an
              experiment in building trust at the speed of consensus.
            </p>
          </div>
        </div>

        {/* P4P framework */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.2s" }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Peer-for-Peer
          </h3>
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              MycoStack carries this legacy forward with a new framework:{" "}
              <strong>Peer-for-Peer (P4P)</strong> &mdash; an evolution of P2P
              thinking that emphasizes peers acting <em>for</em> peers, not
              just exchanging with them. Mutual care and regeneration as core
              protocols. Active stewardship rather than passive participation.
              Solidarity economics in practice.
            </p>
            <p>
              Where the original Commons Stack built tools, MycoStack grows
              ecosystems. Where P2P described a relational dynamic, P4P demands
              a commitment. The mycelium doesn&rsquo;t just connect &mdash; it
              nourishes.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div
          className="section-reveal grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto"
          style={{ transitionDelay: "0.25s" }}
        >
          {[
            {
              title: "Preserve",
              text: "Steward the knowledge commons. The P2P Foundation Wiki, oral histories, theoretical frameworks \u2014 ensuring decades of accumulated wisdom remain living resources, not static monuments.",
            },
            {
              title: "Sustain",
              text: "Build regenerative funding loops for commons infrastructure. Quadratic funding, mutual credit, contributor support systems \u2014 economics that feed the network instead of extracting from it.",
            },
            {
              title: "Evolve",
              text: "Update the theoretical frameworks for current conditions. Bridge Web3 and traditional commons movements. Experiment with emerging technologies in service of collective flourishing.",
            },
            {
              title: "Propagate",
              text: "Spread the spores. Educational resources, onboarding pathways, translation and localization. Grow the network of people who understand and practice commons governance.",
            },
          ].map((pillar, i) => (
            <div
              key={pillar.title}
              className="glass-card p-5 space-y-2"
            >
              <h4 className="font-serif text-lg font-semibold">
                {pillar.title}
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="section-reveal max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl italic leading-relaxed opacity-70">
            &ldquo;The more we share, the more we have.&rdquo;
          </p>
          <cite className="block mt-3 text-sm opacity-40 not-italic">
            &mdash; a commons proverb
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
