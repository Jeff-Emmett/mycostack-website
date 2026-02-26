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
            The MycoStack grows from the Commons Stack &mdash; its primary root
            system &mdash; nourished by the knowledge commons of the P2P
            Foundation and the broader commons movement.
          </p>
        </div>

        {/* Commons Stack - Primary Root */}
        <div className="section-reveal max-w-3xl mx-auto space-y-6">
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
              is the primary root of the MycoStack. Its mission:{" "}
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
              experiment in building trust at the speed of consensus. From this
              root system, the MycoStack grows outward.
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

        {/* P2P Foundation - Foundation AND Forward */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.12s" }}
        >
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
              , started by Michel Bauwens and shaped by
              hundreds of contributors, is both the bedrock beneath the
              MycoStack and the frontier ahead of it. Over 25,000 pages of
              case studies, theoretical frameworks, policy proposals, and
              practical guides &mdash; an open knowledge base that continues
              to inform projects worldwide.
            </p>
            <p>
              Out of this work came key frameworks:{" "}
              <strong>commons-based peer production</strong>, the{" "}
              <strong>partner state</strong>, and{" "}
              <strong>cosmo-localism</strong> (&ldquo;design global, manufacture
              local&rdquo;). But the P2P Foundation doesn&rsquo;t just preserve
              knowledge &mdash; it transforms it. Each iteration of commons
              practice feeds back into the knowledge base, refining theories
              into{" "}
              <strong>convivial knowledge packets</strong>: living documents
              that distill decades of research and practice into actionable
              frameworks communities can actually use.
            </p>
            <p>
              These knowledge packets become the seeds of{" "}
              <strong>open source protocol toolkits</strong> &mdash; practical
              governance, funding, and coordination tools that any community
              can adopt, adapt, and contribute back to. The P2P Foundation as
              both root system and fruiting body: absorbing nutrients from the
              ground, pushing spores into the future.
            </p>
          </div>
        </div>

        {/* Data Flows - New Section */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.15s" }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Data Flows of the Commons
          </h3>
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              The MycoStack recognizes that the dissemination of{" "}
              <strong>trust</strong>, <strong>resources</strong>,{" "}
              <strong>favors</strong>, and <strong>capital</strong> are all
              data flows &mdash; streams that can be made visible, governed
              collectively, and managed by communities on self-provisioned
              infrastructure.
            </p>
            <p>
              When communities own their own coordination tools, these flows
              stop being opaque transactions mediated by extractive platforms
              and become transparent, reciprocal exchanges governed by the
              people who participate in them. Trust becomes legible. Resources
              find their way to where they&rsquo;re needed. Favors compound
              into mutual aid networks. Capital circulates instead of
              accumulating.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 space-y-4">
            <h4 className="font-serif text-lg font-semibold opacity-70">
              Community-Owned Infrastructure for Coordination
            </h4>
            <div className="grid gap-4 sm:grid-cols-2 font-mono text-sm">
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold not-italic">
                  <a
                    href="https://rstack.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="domain-link"
                  >
                    rStack
                  </a>
                </div>
                <div className="opacity-60">
                  Open source infrastructure stack for community coordination
                  &mdash; self-hostable, sovereign, interoperable
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold not-italic">
                  <a
                    href="https://yourspace.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="domain-link"
                  >
                    (You)rSpace
                  </a>
                </div>
                <div className="opacity-60">
                  Community-owned digital spaces &mdash; where coordination
                  happens on infrastructure you control
                </div>
              </div>
            </div>
            <p className="text-sm opacity-50 pt-2">
              When communities own their stack, every data flow becomes a
              commons resource rather than a corporate asset.
            </p>
          </div>
        </div>

        {/* P4P Movement */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.20s" }}
        >
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            The Inoculation of the
            <br />
            Peer-for-Peer (P4P) Movement
          </h3>
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              MycoStack carries this legacy forward by inoculating a
              movement: <strong>Peer-for-Peer (P4P)</strong> &mdash; an
              evolution of P2P thinking that shifts from peers exchanging{" "}
              <em>with</em> each other to peers acting <em>for</em> each other.
              Mutual care and regeneration as core protocols. Active stewardship
              rather than passive participation. Solidarity economics in
              practice.
            </p>
            <p>
              The P2P Foundation&rsquo;s convivial knowledge packets become
              the P4P movement&rsquo;s open source protocol toolkits &mdash;
              governance patterns, funding mechanisms, and coordination
              primitives packaged as commons resources that any community can
              deploy. Where P2P described a relational dynamic, P4P demands a
              commitment. The mycelium doesn&rsquo;t just connect &mdash; it
              nourishes.
            </p>
          </div>

          {/* P4P meanings */}
          <div className="glass-card p-6 sm:p-8 space-y-4">
            <h4 className="font-serif text-lg font-semibold opacity-70 text-center">
              P4P is a fractal &mdash; the same ethic, many expressions
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 font-mono text-sm">
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold not-italic">
                  Peer for Peer
                </div>
                <div className="opacity-60">
                  Individuals acting in service of one another
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold not-italic">
                  People for Planet
                </div>
                <div className="opacity-60">
                  Collective stewardship of our shared home
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold not-italic">
                  Protocols for Participation
                </div>
                <div className="opacity-60">
                  Governance tools that encode mutual care
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold not-italic">
                  Platforms for the Public
                </div>
                <div className="opacity-60">
                  Infrastructure owned by the communities it serves
                </div>
              </div>
            </div>
            <p className="text-sm opacity-50 text-center pt-2">
              Every reading of P4P converges on the same principle: mutual
              flourishing over extraction.
            </p>
          </div>
        </div>

        {/* Tools in Active Research */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.22s" }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Tools in Active Research
          </h3>
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              <strong>Flow Funding</strong> &mdash; the natural evolution of
              the Commons Stack&rsquo;s Augmented Bonding Curve. Less
              mechanism, more ecology. Where the ABC created a single
              reservoir, Flow Funding cultivates{" "}
              <em>enmeshed ecologies</em> of inter- and intra-organizational
              flow &mdash; resources circulating continuously between nested
              communities the way nutrients cycle through a forest floor.
            </p>
            <p>
              The latest research takes the form of{" "}
              <strong>Threshold-Based Flow Funding (TBFF)</strong>, being
              developed at{" "}
              <a
                href="https://rfunds.online"
                target="_blank"
                rel="noopener noreferrer"
                className="domain-link"
              >
                rFunds.online
              </a>
              . TBFF models funding pools as dynamic funnels operating across
              three zones: an <strong>overflow zone</strong> where excess funds
              automatically redistribute to connected pools, a{" "}
              <strong>healthy zone</strong> of full flow and balanced
              operations, and a <strong>critical zone</strong> where outflow
              restricts to conservation mode. Funnels connect via overflow and
              spending edges, creating living networks of resource circulation
              governed by thresholds of{" "}
              <strong>&ldquo;enoughness&rdquo;</strong> rather than
              accumulation.
            </p>
            <p>
              This is economics as ecology: not designing incentives from above,
              but cultivating the conditions for resources to find their own
              path &mdash; rooted, reciprocal, and regenerative by nature.
            </p>
          </div>

          <div className="glass-card p-6 space-y-3 font-mono text-sm">
            <div className="font-serif text-base font-semibold not-italic opacity-70">
              TBFF Zones
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="space-y-1">
                <div className="opacity-50">overflow</div>
                <div className="opacity-70 text-xs">
                  Above MAX &mdash; surplus redistributes to connected funnels
                </div>
              </div>
              <div className="space-y-1">
                <div style={{ color: "var(--mycelium-green)" }}>healthy</div>
                <div className="opacity-70 text-xs">
                  Normal ops &mdash; full flow rate, balanced funding
                </div>
              </div>
              <div className="space-y-1">
                <div style={{ color: "var(--compost-amber)" }}>critical</div>
                <div className="opacity-70 text-xs">
                  Below MIN &mdash; outflow restricted, conservation mode
                </div>
              </div>
            </div>
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
              text: "Update the theoretical frameworks for current conditions. Distill research into convivial knowledge packets. Transform insights into open source protocol toolkits that communities can deploy.",
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
