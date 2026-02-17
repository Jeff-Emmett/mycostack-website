import { MycelialCanvas } from "@/components/mycelial-canvas"
import { HeroSection } from "@/components/hero-section"
import { CompostSection } from "@/components/compost-section"
import { MyceliumSection } from "@/components/mycelium-section"
import { UndernetSection } from "@/components/undernet-section"
import { AnastomosisSection } from "@/components/anastomosis-section"
import { EmergenceSection } from "@/components/emergence-section"
import { NetworkMapSection } from "@/components/network-map-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <MycelialCanvas />
      <main className="relative z-10">
        <HeroSection />
        <CompostSection />
        <MyceliumSection />
        <UndernetSection />
        <AnastomosisSection />
        <EmergenceSection />
        <NetworkMapSection />
      </main>
      <Footer />
    </div>
  )
}
