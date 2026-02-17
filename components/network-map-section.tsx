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
    description: "Fund and govern the commons",
    x: 50,
    y: 10,
  },
  {
    name: "P2P Foundation",
    domain: "wiki.p2pfoundation.net",
    description: "25,000 pages of commons knowledge",
    x: 50,
    y: 92,
  },
  {
    name: "MycoFi",
    domain: "mycofi.earth",
    description: "Mycoeconomics & regenerative currencies",
    x: 25,
    y: 20,
  },
  {
    name: "Mycopunk",
    domain: "mycopunk.xyz",
    description: "Building from beneath the surface",
    x: 75,
    y: 15,
  },
  {
    name: "Compost Capitalism",
    domain: "compostcapitalism.xyz",
    description: "Decomposing extractive systems",
    x: 12,
    y: 50,
  },
  {
    name: "The Undernet",
    domain: "undernet.earth",
    description: "Community-owned infrastructure",
    x: 88,
    y: 45,
  },
  {
    name: "Post-Appitalism",
    domain: "post-appitalist.app",
    description: "Tools beyond extractive platforms",
    x: 22,
    y: 78,
  },
  {
    name: "(You)rSpace",
    domain: "yourspace.online",
    description: "Spaces that belong to communities",
    x: 60,
    y: 80,
  },
  {
    name: "Psilo-Cyber",
    domain: "psilo-cyber.net",
    description: "Encrypted mesh networks",
    x: 82,
    y: 72,
  },
  {
    name: "Trippin Balls",
    domain: "trippinballs.lol",
    description: "Expand your perspective",
    x: 42,
    y: 88,
  },
]

const CONNECTIONS: [string, string][] = [
  ["mycostack.xyz", "commonsstack.org"],
  ["mycostack.xyz", "wiki.p2pfoundation.net"],
  ["mycostack.xyz", "mycofi.earth"],
  ["mycostack.xyz", "undernet.earth"],
  ["mycostack.xyz", "compostcapitalism.xyz"],
  ["mycostack.xyz", "yourspace.online"],
  ["commonsstack.org", "wiki.p2pfoundation.net"],
  ["commonsstack.org", "mycofi.earth"],
  ["commonsstack.org", "mycopunk.xyz"],
  ["wiki.p2pfoundation.net", "post-appitalist.app"],
  ["mycofi.earth", "mycopunk.xyz"],
  ["undernet.earth", "psilo-cyber.net"],
  ["compostcapitalism.xyz", "post-appitalist.app"],
  ["post-appitalist.app", "yourspace.online"],
  ["yourspace.online", "trippinballs.lol"],
  ["mycopunk.xyz", "psilo-cyber.net"],
  ["mycopunk.xyz", "undernet.earth"],
]

function getNode(domain: string) {
  return NODES.find((n) => n.domain === domain)
}

export function NetworkMapSection() {
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
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            The Network of Networks
          </h2>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto">
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
