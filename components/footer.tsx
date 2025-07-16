import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MountainIcon, FacebookIcon, YoutubeIcon, InstagramIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-secondary text-secondary-foreground">
      <div className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="text-sm font-medium">Seventh-day Adventist Church Kanyanya</span>
      </div>
      <p className="text-xs text-center sm:text-left">&copy; {new Date().getFullYear()} All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
        <Link href="#about" className="text-xs hover:underline underline-offset-4">
          About
        </Link>
        <Link href="#ministers" className="text-xs hover:underline underline-offset-4">
          Ministers
        </Link>
        <Link href="#ministries" className="text-xs hover:underline underline-offset-4">
          Ministries
        </Link>
        <Link href="#services" className="text-xs hover:underline underline-offset-4">
          Services
        </Link>
        <Link href="#sermons" className="text-xs hover:underline underline-offset-4">
          Sermons
        </Link>
        <Link href="#news-events" className="text-xs hover:underline underline-offset-4">
          News & Events
        </Link>
        <Link href="#resources" className="text-xs hover:underline underline-offset-4">
          Resources
        </Link>
        <Link href="#giving" className="text-xs hover:underline underline-offset-4">
          Giving
        </Link>
        <Link href="#contact" className="text-xs hover:underline underline-offset-4">
          Contact
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Global SDA Affiliation
        </Link>
        {/* Optional: Membership Login */}
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Member Login
        </Link>
      </nav>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <Link
          href="https://facebook.com/yourchurchpage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon className="h-5 w-5 hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://youtube.com/yourchurchchannel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <YoutubeIcon className="h-5 w-5 hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://instagram.com/yourchurchaccount"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-5 w-5 hover:text-primary transition-colors" />
        </Link>
      </div>
      {/* Newsletter Signup Placeholder */}
      <div className="w-full text-center mt-4">
        <p className="text-sm">Stay connected! Sign up for our newsletter:</p>
        <form className="flex justify-center gap-2 mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm"
            aria-label="Email for newsletter signup"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Subscribe
          </Button>
        </form>
      </div>
    </footer>
  )
}
