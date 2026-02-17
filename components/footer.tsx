"use client"

const LINKS = [
  { name: "Commons Stack", url: "https://commonsstack.org" },
  { name: "P2P Foundation", url: "https://wiki.p2pfoundation.net/" },
  { name: "MycoFi", url: "https://mycofi.earth" },
  { name: "Mycopunk", url: "https://mycopunk.xyz" },
  { name: "Undernet", url: "https://undernet.earth" },
  { name: "Psilo-Cyber", url: "https://psilo-cyber.net" },
  { name: "Compost Capitalism", url: "https://compostcapitalism.xyz" },
  { name: "Post-Appitalism", url: "https://post-appitalist.app" },
  { name: "(You)rSpace", url: "https://yourspace.online" },
  { name: "Trippin Balls", url: "https://trippinballs.lol" },
]

export function Footer() {
  return (
    <footer className="relative z-10 py-20 px-6 border-t border-current/10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Network links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs opacity-40 hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center space-y-3">
          <p className="font-serif text-lg opacity-50">
            Built with compost and code.
          </p>
          <p className="font-mono text-xs opacity-30">
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
