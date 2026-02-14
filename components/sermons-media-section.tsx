"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircleIcon, GalleryHorizontalIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

export function SermonsMediaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const dragRef = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const livestreamLink = "https://www.youtube.com/live/mRLrGiUJO6w?si=eJATksMUqQJoE-_m"

  // Convert any YouTube link to embed URL
  const getEmbedLink = (link: string) => {
    try {
      const url = new URL(link)
      let videoId = ""

      if (url.hostname === "youtu.be") {
        // short link
        videoId = url.pathname.slice(1)
      } else if (
        url.hostname === "www.youtube.com" ||
        url.hostname === "youtube.com"
      ) {
        if (url.pathname.startsWith("/watch")) {
          // standard watch link
          videoId = url.searchParams.get("v") || ""
        } else if (url.pathname.startsWith("/live/")) {
          // /live/{id}
          videoId = url.pathname.split("/live/")[1]
        } else if (url.pathname.startsWith("/live_stream")) {
          // channel livestream
          const channelId = url.searchParams.get("channel")
          if (channelId) {
            return `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1`
          }
        } else if (url.pathname.startsWith("/embed/")) {
          // already embed link
          return link
        }
      }

      if (!videoId) return ""
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    } catch {
      return ""
    }
  }

  const embedLink = getEmbedLink(livestreamLink)

  const recordedSermons = [
    {
      title: "Revival and Reformation",
      preacher: "Pastor Mulindwa Patrick",
      date: "July 10, 2024",
      thumbnail: "/images/jesus.JPG",
      link: "https://youtu.be/_Ptct8Volp8?si=drYwUKmwM-AimPdk",
    },
    {
      title: "Happy Home",
      preacher: "Pr Kajoba Samuel",
      date: "July 3, 2024",
      thumbnail: "/images/leaf.JPG",
      link: "https://youtu.be/VE0eYB5Q2mY?si=tMcZvz7hRuW3Z-1-",
    },
    {
      title: "Man in the mirror",
      preacher: "Elder Mwakali Jackson",
      date: "June 26, 2024",
      thumbnail: "/images/sunset.JPG",
      link: "https://www.youtube.com/live/houiWG7Trqg?si=zl9z5x15XXfNgDPY",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !dragRef.current) return
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y })
    }
    const handleMouseUp = () => { isDragging.current = false }
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
    <section id="sermons" className="scroll-mt-20 w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2 className=" text-3xl font-bold tracking-tighter sm:text-5xl">Sermons & Media</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Catch up on our latest sermons, watch our livestream, and browse photo galleries from church events.
          </p>
        </div>

        {/* Livestream Section */}
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold">Watch Our Livestream</h3>
            <p className="text-muted-foreground">
              Join us live every Sabbath for our Divine Service and other special programs.
            </p>

            {!isModalOpen && (
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <PlayCircleIcon className="mr-2 h-5 w-5" />
                Watch Live on YouTube
              </Button>
            )}
          </div>

          {/* Livestream Image */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg relative bg-black">
            <Image
              src="/images/camp.jpg"
              alt="Sabbath August 30, 2025"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Recorded Sermons */}
        <div className="space-y-4 mb-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recorded Sermons</h3>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Missed a service? Catch up on past sermons here.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {recordedSermons.map((sermon, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={sermon.thumbnail || "/placeholder.svg"}
                  width={341}
                  height={192}
                  alt={sermon.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4 text-left">
                  <CardTitle className="text-lg font-semibold mb-1">{sermon.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {sermon.preacher} | {sermon.date}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-end">
                  <Button asChild variant="outline">
                    <Link href={sermon.link} target="_blank" rel="noopener noreferrer">
                      Watch Sermon
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo Galleries */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Photo Galleries</h3>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Relive moments from our church events and activities.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#" className="inline-flex items-center">
              <GalleryHorizontalIcon className="mr-2 h-5 w-5" /> View All Galleries
            </Link>
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <Image
              src="/images/first.JPG"
              width={409}
              height={256}
              alt="Church Interior"
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
            <Image
              src="/images/cavani.jpg"
              width={409}
              height={256}
              alt="Church Community Event"
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
            <Image
              src="/images/sing.JPG"
              width={409}
              height={256}
              alt="Youth Program"
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Draggable & Minimizable Livestream Modal */}
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
    </section>
  )
}
