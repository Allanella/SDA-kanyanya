import { MapPinIcon, MailIcon, PhoneIcon, MessageCircleIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY"
  const mapQuery = encodeURIComponent("Seventhday Adventist Church Kanyanya, Gayaza Road, Kampala, Uganda")

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              We would love to hear from you! Feel free to reach out with any questions or to plan your visit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <span>5 miles on Gayaza road, Kanyanya, Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MailIcon className="h-5 w-5 text-primary" />
                <span>info@sdakanyanya.org (placeholder)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>+256 7XX XXX XXX (placeholder)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircleIcon className="h-5 w-5 text-primary" />
                <span>WhatsApp: +256 7XX XXX XXX (placeholder)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>P.O. Box 1491 Kampala Uganda</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="h-5 w-5 text-primary" />
                <span>Church Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#">Send Us a Message (Contact Form Placeholder)</Link>
            </Button>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${mapQuery}`}
              title="Seventh-day Adventist Church Kanyanya Location"
              aria-label="Google Map showing Seventh-day Adventist Church Kanyanya"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
