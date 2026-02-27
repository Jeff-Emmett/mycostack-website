"use client"

import { useState } from "react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { ExternalLink } from "lucide-react"

interface NetworkNode {
  name: string
  domain: string
  description: string
  x: number
  y: number
  primary?: boolean
}

const NODES: NetworkNode[] = [
  {
    name: "MycoStack",
    domain: "mycostack.xyz",
    description: "Technology-augmented commons",
    x: 50,
    y: 45,
    primary: true,
  },
  {
    name: "Commons Stack",
    domain: "commonsstack.org",
    description: "Fund and govern the commons — primary root",
    x: 50,
    y: 8,
  },
  {
    name: "P2P Foundation",
    domain: "wiki.p2pfoundation.net",
    description: "25,000 pages of commons knowledge",
    x: 50,
    y: 95,
  },
  {
    name: "MycoFi",
    domain: "mycofi.earth",
    description: "Mycoeconomics & regenerative currencies",
    x: 20,
    y: 18,
  },
  {
    name: "CoFi",
    domain: "cofi.earth",
    description: "Community finance — coordinating shared resources",
    x: 80,
    y: 18,
  },
  {
    name: "NoFi",
    domain: "nofi.lol",
    description: "Post-finance — beyond the need for money",
    x: 92,
    y: 8,
  },
  {
    name: "rFunds",
    domain: "rfunds.online",
    description: "Threshold-Based Flow Funding research",
    x: 15,
    y: 30,
  },
  {
    name: "rStack",
    domain: "rstack.org",
    description: "Open source community coordination infrastructure",
    x: 78,
    y: 55,
  },
  {
    name: "Compost Capitalism",
    domain: "compostcapitalism.xyz",
    description: "Decomposing extractive systems",
    x: 12,
    y: 55,
  },
  {
    name: "The Undernet",
    domain: "undernet.earth",
    description: "Community-owned infrastructure",
    x: 88,
    y: 35,
  },
  {
    name: "Post-Appitalism",
    domain: "post-appitalist.app",
    description: "Tools beyond extractive platforms",
    x: 15,
    y: 78,
  },
  {
    name: "rSpace",
    domain: "yourspace.online",
    description: "Community-owned digital spaces",
    x: 65,
    y: 78,
  },
  {
    name: "Psilo-Cyber",
    domain: "psilo-cyber.net",
    description: "Institutional neuroplasticity & adaptive systems",
    x: 88,
    y: 70,
  },
  {
    name: "Trippin Balls",
    domain: "trippinballs.lol",
    description: "Expand your perspective",
    x: 38,
    y: 92,
  },
]

const CONNECTIONS: [string, string][] = [
  ["mycostack.xyz", "commonsstack.org"],
  ["mycostack.xyz", "wiki.p2pfoundation.net"],
  ["mycostack.xyz", "mycofi.earth"],
  ["mycostack.xyz", "undernet.earth"],
  ["mycostack.xyz", "compostcapitalism.xyz"],
  ["mycostack.xyz", "yourspace.online"],
  ["mycostack.xyz", "rstack.org"],
  ["mycostack.xyz", "cofi.earth"],
  ["commonsstack.org", "wiki.p2pfoundation.net"],
  ["commonsstack.org", "mycofi.earth"],
  ["commonsstack.org", "rfunds.online"],
  ["commonsstack.org", "cofi.earth"],
  ["rfunds.online", "mycofi.earth"],
  ["cofi.earth", "mycofi.earth"],
  ["cofi.earth", "nofi.lol"],
  ["nofi.lol", "mycofi.earth"],
  ["rstack.org", "yourspace.online"],
  ["rstack.org", "undernet.earth"],
  ["wiki.p2pfoundation.net", "post-appitalist.app"],
  ["undernet.earth", "psilo-cyber.net"],
  ["compostcapitalism.xyz", "post-appitalist.app"],
  ["post-appitalist.app", "yourspace.online"],
  ["yourspace.online", "trippinballs.lol"],
  ["psilo-cyber.net", "rstack.org"],
]

function getNode(domain: string) {
  return NODES.find((n) => n.domain === domain)
}

export function NoFiSection() {
  const sectionRef = useSectionReveal()
  const [hovered, setHovered] = useState<string | null>(null)

  const isConnected = (domain: string) => {
    if (!hovered) return false
    return CONNECTIONS.some(
      ([a, b]) =>
        (a === hovered && b === domain) || (b === hovered && a === domain)
    )
  }

  const getLineOpacity = (a: string, b: string) => {
    if (!hovered) return 0.15
    if (
      (a === hovered || b === hovered) &&
      (isConnected(a) || isConnected(b) || a === hovered || b === hovered)
    )
      return 0.5
    return 0.06
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-6 noise-overlay" style={{ background: "oklch(0.14 0.02 140 / 0.9)" }}>
      <div className="mycelial-divider mb-12" />

      <div className="max-w-5xl mx-auto space-y-14">
        {/* Ecosystem header */}
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
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
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
                  href="https://cofi.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  CoFi
                </a>
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Community finance &mdash; the practical layer where communities
                coordinate shared resources. The bridge between ReFi&rsquo;s
                ideals and MycoFi&rsquo;s living systems. Cooperative finance
                for the commons.
              </p>
            </div>
          </div>

          <div className="glass-card p-3 space-y-1 font-mono text-xs text-center max-w-sm mx-auto">
            <div className="opacity-50">TradFi &rarr; DeFi &rarr; ReFi &rarr;</div>
            <div style={{ color: "var(--scroll-accent)" }}>CoFi</div>
            <div className="opacity-50">&rarr; MycoFi &rarr; NoFi</div>
          </div>
        </div>

        {/* Row 3: Cultural & infrastructure ecosystems */}
        <div className="section-reveal space-y-4" style={{ transitionDelay: "0.2s" }}>
          <h3 className="font-serif text-xl font-semibold opacity-70 text-center">
            Culture &amp; Infrastructure
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
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

        {/* Institutional Neuroplasticity */}
        <div className="section-reveal space-y-4" style={{ transitionDelay: "0.3s" }}>
          <h3 className="font-serif text-xl font-semibold opacity-70 text-center">
            <a
              href="https://psilo-cyber.net/ics"
              target="_blank"
              rel="noopener noreferrer"
              className="domain-link"
            >
              Institutional Neuroplasticity
            </a>
          </h3>
          <div className="glass-card p-6 space-y-5 max-w-3xl mx-auto">
            <p className="text-sm leading-relaxed opacity-85">
              The MycoStack doesn&rsquo;t just build new institutions &mdash; it
              makes institutions capable of continuous adaptation. Structures
              that rewire themselves in response to changing conditions.
              Governance that evolves through use. Protocols that strengthen the
              pathways that work and prune those that don&rsquo;t.
            </p>
            <div className="border-t border-current/10 pt-4 space-y-2">
              <h4 className="font-serif text-base font-semibold opacity-90">
                Dynamic Adaptivity
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Rigid institutions fail because they can&rsquo;t adapt. The
                MycoStack enables dynamic adaptivity &mdash; institutions that
                sense, respond, and reorganize like living systems. Not static
                bureaucracies but adaptive organisms.
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

        {/* Network Map */}
        <div className="mycelial-divider" />

        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            The Network of Networks
          </h2>
          <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto">
            Every node strengthens the whole. Every connection multiplies
            possibility.
          </p>
        </div>

        {/* Desktop: SVG network map */}
        <div className="section-reveal hidden md:block">
          <div className="relative" style={{ paddingBottom: "60%" }}>
            <svg
              viewBox="0 0 1000 600"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              {/* Connection lines */}
              {CONNECTIONS.map(([a, b]) => {
                const nodeA = getNode(a)
                const nodeB = getNode(b)
                if (!nodeA || !nodeB) return null
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={nodeA.x * 10}
                    y1={nodeA.y * 6}
                    x2={nodeB.x * 10}
                    y2={nodeB.y * 6}
                    stroke="var(--scroll-accent)"
                    strokeWidth="1"
                    opacity={getLineOpacity(a, b)}
                    style={{ transition: "opacity 0.3s ease" }}
                  />
                )
              })}
            </svg>

            {/* Node cards */}
            {NODES.map((node) => {
              const isActive = hovered === node.domain
              const connected = isConnected(node.domain)
              const dimmed = hovered && !isActive && !connected

              return (
                <a
                  key={node.domain}
                  href={`https://${node.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="network-node absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    opacity: dimmed ? 0.3 : 1,
                    transition: "opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease",
                  }}
                  onMouseEnter={() => setHovered(node.domain)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`glass-card px-4 py-3 text-center space-y-1 ${
                      node.primary ? "ring-1 ring-current/20" : ""
                    }`}
                  >
                    <div className="font-serif text-sm font-semibold whitespace-nowrap">
                      {node.name}
                    </div>
                    <div className="font-mono text-xs opacity-50 whitespace-nowrap flex items-center gap-1 justify-center">
                      {node.domain}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </div>
                    {isActive && (
                      <div className="text-xs opacity-60 max-w-[160px]">
                        {node.description}
                      </div>
                    )}
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Mobile: Simple card list */}
        <div className="section-reveal md:hidden grid gap-3 grid-cols-1 sm:grid-cols-2">
          {NODES.map((node, i) => (
            <a
              key={node.domain}
              href={`https://${node.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 space-y-1 hover:opacity-80 transition-opacity"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="font-serif text-base font-semibold flex items-center gap-2">
                {node.name}
                <ExternalLink className="w-3 h-3 opacity-40" />
              </div>
              <div className="font-mono text-xs opacity-40">{node.domain}</div>
              <div className="text-xs opacity-60">{node.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
