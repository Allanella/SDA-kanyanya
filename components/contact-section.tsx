import { MapPinIcon, MailIcon, PhoneIcon, MessageCircleIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  // Keeping these for your reference if you want to use later
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
                <span>kanyanyasdachurchofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>+256 700 966 715 </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircleIcon className="h-5 w-5 text-primary" />
                <span>WhatsApp: +256 700 966 715</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.527796324001!2d32.590867815296645!3d0.3759955992707755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db9e3d6e2f4a7%3A0x5f880fd9af77e6a6!2sSeventh-day%20Adventist%20Church%20Kanyanya!5e0!3m2!1sen!2sug!4v1695912345678!5m2!1sen!2sug"
              title="Seventh-day Adventist Church Kanyanya Location"
              aria-label="Google Map showing Seventh-day Adventist Church Kanyanya"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-blue-900 tracking-wide">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
