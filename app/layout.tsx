import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Crimson_Pro } from "next/font/google"
import { ScrollProvider } from "@/components/scroll-provider"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MycoStack — Technology-Augmented Commons",
  description:
    "A reboot of the Commons Stack, merging technology with mycelial principles for regenerative systems. Growing from beneath the surface.",
  metadataBase: new URL("https://mycostack.xyz"),
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍄</text></svg>",
  },
  openGraph: {
    title: "MycoStack — Technology-Augmented Commons",
    description:
      "Growing regenerative systems from beneath the surface. Commons governance meets mycelial design.",
    url: "https://mycostack.xyz",
    siteName: "MycoStack",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MycoStack — Technology-Augmented Commons",
    description:
      "Growing regenerative systems from beneath the surface.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${crimsonPro.variable} font-sans antialiased`}
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  )
}
