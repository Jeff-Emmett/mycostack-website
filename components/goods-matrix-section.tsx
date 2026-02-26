"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

const MATRIX = [
  {
    excludability: "Excludable",
    cells: [
      {
        type: "Private goods",
        example: "e.g. coffee",
        column: "rival" as const,
      },
      {
        type: "Club / toll goods",
        example: "e.g. museum visit",
        column: "nonrival" as const,
      },
      {
        type: "Network goods",
        example: "e.g. Fortnite",
        column: "antirival" as const,
      },
    ],
  },
  {
    excludability: "Non-excludable",
    cells: [
      {
        type: "Common-pool goods",
        example: "e.g. ocean fish",
        column: "rival" as const,
      },
      {
        type: "Public goods",
        example: "e.g. public beach",
        column: "nonrival" as const,
      },
      {
        type: "Symbiotic goods",
        example: "e.g. the Internet",
        column: "antirival" as const,
      },
    ],
  },
]

export function GoodsMatrixSection() {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 noise-overlay">
      <div className="mycelial-divider mb-20" />

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="section-reveal space-y-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
            Beyond Ostrom&rsquo;s Matrix
          </h2>
          <p className="text-lg sm:text-xl opacity-70 max-w-2xl mx-auto">
            Elinor Ostrom mapped the commons as a 2&times;2 grid. But the
            network age reveals a third column &mdash; goods that grow{" "}
            <em>more</em> valuable the more people use them.
          </p>
        </div>

        {/* Matrix Table — Desktop */}
        <div className="section-reveal hidden sm:block" style={{ transitionDelay: "0.1s" }}>
          <div className="glass-card overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-[160px_1fr_1fr_1fr]">
              <div className="p-4 flex items-end">
                <span className="font-serif text-sm font-semibold opacity-50">
                  Excludability
                </span>
              </div>
              <div className="col-span-3 text-center py-2 border-b border-current/10">
                <span className="font-serif text-base font-semibold opacity-70">
                  Subtractability
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[160px_1fr_1fr_1fr]">
              <div />
              <div className="p-3 text-center border-b border-current/10">
                <span className="font-mono text-xs opacity-50">Rival</span>
              </div>
              <div className="p-3 text-center border-b border-current/10">
                <span className="font-mono text-xs opacity-50">Nonrival</span>
              </div>
              <div className="p-3 text-center border-b border-current/10">
                <span
                  className="font-mono text-xs font-semibold"
                  style={{ color: "var(--scroll-accent)" }}
                >
                  Anti-rival
                </span>
              </div>
            </div>

            {/* Data rows */}
            {MATRIX.map((row, ri) => (
              <div
                key={row.excludability}
                className="grid grid-cols-[160px_1fr_1fr_1fr]"
              >
                <div className="p-4 flex items-center border-r border-current/10">
                  <span className="font-mono text-xs opacity-60">
                    {row.excludability}
                  </span>
                </div>
                {row.cells.map((cell) => (
                  <div
                    key={cell.type}
                    className={`p-4 text-center ${
                      ri === 0 ? "border-b border-current/5" : ""
                    } ${
                      cell.column === "antirival"
                        ? "bg-current/[0.04]"
                        : ""
                    }`}
                  >
                    <div
                      className={`font-serif text-sm font-semibold ${
                        cell.column === "antirival" ? "" : "opacity-80"
                      }`}
                      style={
                        cell.column === "antirival"
                          ? { color: "var(--scroll-accent)" }
                          : undefined
                      }
                    >
                      {cell.type}
                    </div>
                    <div className="font-mono text-xs opacity-40 mt-1">
                      {cell.example}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix — Mobile (stacked cards) */}
        <div className="section-reveal sm:hidden space-y-3" style={{ transitionDelay: "0.1s" }}>
          {MATRIX.map((row) =>
            row.cells.map((cell) => (
              <div
                key={cell.type}
                className={`glass-card p-4 space-y-1 ${
                  cell.column === "antirival"
                    ? "ring-1 ring-current/20"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-serif text-sm font-semibold ${
                      cell.column === "antirival" ? "" : "opacity-80"
                    }`}
                    style={
                      cell.column === "antirival"
                        ? { color: "var(--scroll-accent)" }
                        : undefined
                    }
                  >
                    {cell.type}
                  </span>
                  <span className="font-mono text-xs opacity-40">
                    {cell.example}
                  </span>
                </div>
                <div className="font-mono text-xs opacity-40">
                  {row.excludability} &middot;{" "}
                  {cell.column === "antirival"
                    ? "Anti-rival"
                    : cell.column === "nonrival"
                    ? "Nonrival"
                    : "Rival"}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Commentary */}
        <div
          className="section-reveal max-w-3xl mx-auto space-y-6"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="space-y-4 text-base leading-relaxed opacity-80">
            <p>
              Traditional economics fixates on the left two columns: private
              goods to buy, public goods to fund, common-pool resources to
              manage. Ostrom&rsquo;s Nobel-winning work showed that communities
              could govern commons without markets or states. But even her
              framework didn&rsquo;t fully account for what the network age
              has revealed.
            </p>
            <p>
              <strong>Anti-rival goods</strong> break the scarcity assumption
              entirely. Unlike rival goods (my use diminishes yours) or
              nonrival goods (my use doesn&rsquo;t affect yours), anti-rival
              goods become <em>more valuable</em> as more people use them.
              Languages, protocols, networks, shared knowledge bases &mdash;
              the value increases with every participant.
            </p>
            <p>
              <strong>Network goods</strong> are anti-rival but excludable
              &mdash; platforms that grow more valuable with users, but that
              can gate access. This is where most of big tech lives:
              extracting rent from network effects they didn&rsquo;t create.
            </p>
            <p>
              <strong>Symbiotic goods</strong> are the radical possibility:
              anti-rival <em>and</em> non-excludable. Goods that get better
              the more people participate, and that nobody can be locked out
              of. Open protocols. Shared knowledge commons. Mycelial networks
              of mutual support. This is where the MycoStack lives &mdash;
              building the infrastructure for a world of symbiotic goods,
              where abundance is the default and every participant strengthens
              the whole.
            </p>
          </div>
        </div>

        <blockquote
          className="section-reveal max-w-2xl mx-auto text-center"
          style={{ transitionDelay: "0.25s" }}
        >
          <p className="font-serif text-xl sm:text-2xl italic leading-relaxed opacity-70">
            &ldquo;The forest floor is a symbiotic good. Every organism that
            joins makes the soil richer for all.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
