'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="SDA Church Kanyanya Logo"
          className="h-10 w-10"
        />
        <span className="text-sm sm:text-base md:text-lg font-semibold">SDA Church Kanyanya</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        {["home", "about", "ministers", "ministries", "services", "sermons", "news-events", "resources", "giving", "contact"].map((id) => (
          <Link key={id} href={`#${id}`} className="text-sm font-medium hover:underline underline-offset-4">
            {id.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
          </Link>
        ))}
      </nav>

      {/* Visit Button & Mobile Menu Icon */}
      <div className="flex items-center gap-2">
        <Button
          asChild
          className="hidden md:inline-flex bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          <Link href="#contact">Visit Us</Link>
        </Button>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary text-primary-foreground shadow-md flex flex-col gap-4 px-4 py-6 md:hidden z-40">
          {["home", "about", "ministers", "ministries", "services", "sermons", "news-events", "resources", "giving", "contact"].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {id.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </Link>
          ))}
          <Button
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="#contact">Visit Us</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
