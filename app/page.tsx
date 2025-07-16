import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MinistersSection } from "@/components/ministers-section"
import { MinistriesSection } from "@/components/ministries-section" // New import
import { ServicesSection } from "@/components/services-section"
import { SermonsMediaSection } from "@/components/sermons-media-section" // New import
import { NewsEventsSection } from "@/components/news-events-section" // New import
import { ResourcesSection } from "@/components/resources-section" // New import
import { GivingSection } from "@/components/giving-section" // New import
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
        <MinistriesSection /> {/* New section */}
        <ServicesSection />
        <SermonsMediaSection /> {/* New section */}
        <NewsEventsSection /> {/* New section */}
        <ResourcesSection /> {/* New section */}
        <GivingSection /> {/* New section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
