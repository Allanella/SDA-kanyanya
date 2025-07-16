import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react" // Import MenuIcon for mobile toggle

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png" // Ensure this path is correct for your logo
          width={40}
          height={40}
          alt="SDA Church Kanyanya Logo"
          className="h-10 w-10"
        />
        {/* Adjusted font size for responsiveness */}
        <span className="text-base md:text-lg font-semibold whitespace-nowrap">SDA Church Kanyanya</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="#home" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
          About Us
        </Link>
        <Link href="#ministers" className="text-sm font-medium hover:underline underline-offset-4">
          Ministers
        </Link>
        <Link href="#ministries" className="text-sm font-medium hover:underline underline-offset-4">
          Ministries
        </Link>
        <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
          Services
        </Link>
        <Link href="#sermons" className="text-sm font-medium hover:underline underline-offset-4">
          Sermons
        </Link>
        <Link href="#news-events" className="text-sm font-medium hover:underline underline-offset-4">
          News & Events
        </Link>
        <Link href="#resources" className="text-sm font-medium hover:underline underline-offset-4">
          Resources
        </Link>
        <Link href="#giving" className="text-sm font-medium hover:underline underline-offset-4">
          Giving
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button
          asChild
          className="hidden md:inline-flex bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          <Link href="#contact">Visit Us</Link>
        </Button>
        {/* Mobile menu toggle */}
        <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        {/* TODO: Implement mobile navigation functionality (e.g., using useState to toggle a sidebar or full-screen menu) */}
      </div>
    </header>
  )
}
