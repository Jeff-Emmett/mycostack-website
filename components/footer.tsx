"use client"

export function Footer() {
  return (
    <footer className="relative z-10 py-20 px-6 border-t border-current/10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Tagline */}
        <div className="text-center space-y-3">
          <p className="font-serif text-lg opacity-65">
            Made by the mycopunks.
          </p>
          <p className="font-mono text-xs opacity-45">
            MycoStack &mdash; technology-augmented commons growing from beneath
          </p>
          <p className="font-mono text-xs opacity-20">
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              CC BY-SA 4.0
            </a>
            {" "}&mdash;{" "}
            the more we share, the more we have
          </p>
        </div>
      </div>
    </footer>
  )
}
