"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const dragRef = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  // Paste any YouTube link here
  const youtubeLink = "https://www.youtube.com/live/GFkRShccqpo?si=t9GI6wh2_z4HLfGy"

  // Universal YouTube link parser
  const getEmbedLink = (link: string) => {
    try {
      if (link.includes("embed/")) {
        // Already an embed link
        return link
      }

      if (link.includes("live_stream?channel=")) {
        // Channel livestream
        return link
      }

      const url = new URL(link)
      let videoId = ""

      if (url.hostname === "youtu.be") {
        // short link: youtu.be/VIDEO_ID
        videoId = url.pathname.slice(1)
      } else if (
        url.hostname === "www.youtube.com" ||
        url.hostname === "youtube.com"
      ) {
        if (url.pathname.startsWith("/watch")) {
          // watch link: youtube.com/watch?v=VIDEO_ID
          videoId = url.searchParams.get("v") || ""
        } else if (url.pathname.startsWith("/live/")) {
          // live link: youtube.com/live/VIDEO_ID
          videoId = url.pathname.split("/live/")[1]
        }
      }

      if (!videoId) return ""
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    } catch {
      return ""
    }
  }

  const embedLink = getEmbedLink(youtubeLink)

  // Dragging effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !dragRef.current) return
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y })
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current) return
    isDragging.current = true
    const rect = dragRef.current.getBoundingClientRect()
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="scroll-mt-20 w-full py-12 md:py-24 lg:py-32 xl:py-48 
                   bg-gradient-to-br from-primary to-primary/80 text-primary-foreground 
                   relative overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-pattern-overlay opacity-10 z-0"></div>

        {/* Drone Image as Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/drone.png"
            alt="Drone background"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
        </div>

        {/* Content */}
        <div className="container px-4 sm:px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-8">

            {/* Left Column: Hero Text */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left -mt-11">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl leading-tight break-words">
                Seventh-day Adventist Church Kanyanya
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-0 leading-relaxed break-words">
                A vibrant community of faith, hope, and love, located 5 miles on Gayaza road, Kampala, Uganda.
              </p>
            </div>

            {/* Right Column: Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 -mt-12">

              {/* Worship & Study Times */}
              <Card className="bg-white/80 text-primary p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl font-bold text-center">
                    Worship & Study Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-2 text-base font-medium flex-1">
                  <div className="flex justify-between items-center">
                    <span>Sabbath School:</span>
                    <span className="font-semibold">Saturdays, 9:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Divine Service:</span>
                    <span className="font-semibold">Saturdays, 11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mid-week Prayer:</span>
                    <span className="font-semibold">Wednesdays, 6:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-white/80 text-primary p-4 rounded-lg shadow-xl backdrop-blur-sm flex flex-col justify-start">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl font-bold text-center">
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-3 justify-start">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-red-500 text-white font-semibold px-6 py-2 text-lg w-full transform hover:scale-105 transition-transform duration-300"
                  >
                    Watch Livestream
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-6 py-2 text-lg w-full"
                  >
                    <Link href="#giving">Online Giving</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-6 py-2 text-lg w-full"
                  >
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Livestream Modal */}
      {isModalOpen && embedLink && (
        <div
          ref={dragRef}
          onMouseDown={handleMouseDown}
          className={`fixed z-50 bg-black rounded-lg shadow-lg overflow-hidden cursor-move transition-all duration-300 ${
            isMinimized
              ? "w-64 h-36 bottom-4 right-4"
              : "w-full max-w-4xl h-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }`}
          style={{
            left: isMinimized ? position.x || undefined : undefined,
            top: isMinimized ? position.y || undefined : undefined,
          }}
        >
          <iframe
            src={embedLink}
            title="Church Livestream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>

          {/* Controls */}
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-800"
            >
              {isMinimized ? "Expand" : "Minimize"}
            </button>
            <button
              onClick={() => {
                setIsModalOpen(false)
                setIsMinimized(false)
                setPosition({ x: 0, y: 0 })
              }}
              className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
