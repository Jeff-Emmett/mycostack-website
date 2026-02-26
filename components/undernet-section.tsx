"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

const ASCII_NETWORK = `    [node-01] ──── [node-02]
        │              │
        │    ┌─────────┘
        │    │
    [node-03] ──── [node-04]
        │              │
        └──────┬───────┘
               │
           [mesh-05]
               │
        ┌──────┴───────┐
        │              │
    [node-06] ──── [node-07]`

export function UndernetSection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            The Undernet
          </h2>
          <div className="font-mono text-sm opacity-50">
            <span className="opacity-40">&gt;</span> connecting nodes...
            building resilience...
            <span className="cursor-blink ml-0.5">_</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Description */}
          <div className="section-reveal space-y-6">
            <h3 className="font-serif text-2xl font-semibold">
              Community-Owned Infrastructure
            </h3>
            <div className="space-y-4 text-base leading-relaxed opacity-85">
              <p>
                Beneath the extractive platforms, a different kind of
                infrastructure is growing. Self-provisioned. Privacy-first.
                Data sovereign. Locally resilient.
              </p>
              <p>
                Community servers. Encrypted mesh networks. Open protocols that
                no corporation can shut down. Hardware owned by the people who
                depend on it. Software that serves its users instead of
                surveilling them.
              </p>
              <p>
                This is the{" "}
                <a
                  href="https://undernet.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  undernet.earth
                </a>{" "}
                — the network beneath the network. Where the{" "}
                <a
                  href="https://psilo-cyber.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-link"
                >
                  psilo-cyber.net
                </a>
                work grows, encrypted and entangled, through the substrate of
                the old world.
              </p>
            </div>

            <div className="glass-card p-4 space-y-2 font-mono text-xs opacity-80">
              <div>
                <span className="opacity-50">protocol:</span> fog computing
              </div>
              <div>
                <span className="opacity-50">governance:</span> mycological
                consensus
              </div>
              <div>
                <span className="opacity-50">ownership:</span> community
              </div>
              <div>
                <span className="opacity-50">surveillance:</span>{" "}
                <span style={{ color: "var(--mycelium-green)" }}>none</span>
              </div>
            </div>
          </div>

          {/* ASCII Network Diagram */}
          <div
            className="section-reveal glass-card p-6 overflow-x-auto"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="font-mono text-xs sm:text-sm leading-relaxed opacity-80 whitespace-pre">
              {ASCII_NETWORK}
            </div>
            <p className="mt-4 font-mono text-xs opacity-60">
              // every node is sovereign
              <br />
              // every connection is encrypted
              <br />// the network has no center
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
