import { Header} from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MinistersSection } from "@/components/ministers-section"
import { MinistriesSection } from "@/components/ministries-section"
import { ServicesSection } from "@/components/services-section"
import { SermonsMediaSection } from "@/components/sermons-media-section"
import { NewsEventsSection } from "@/components/news-events-section"
import { ResourcesSection } from "@/components/resources-section"
import { DonateSection } from "@/components/donate-section" // ✅ New import
import { GivingSection } from "@/components/giving-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MinistersSection />
        <MinistriesSection />
        <ServicesSection />
        <SermonsMediaSection />
        <NewsEventsSection />
        <ResourcesSection />
        <DonateSection /> {/* ✅ Donate Section */}
        <GivingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
