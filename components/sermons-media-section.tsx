"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircleIcon, GalleryHorizontalIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

export function SermonsMediaSection() {
  const [showLivestream, setShowLivestream] = useState(false)

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

  return (
    <section id="sermons" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sermons & Media</h2>
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

            {!showLivestream && (
              <Button
                onClick={() => setShowLivestream(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <PlayCircleIcon className="mr-2 h-5 w-5" />
                Watch Live on YouTube
              </Button>
            )}

            {showLivestream && (
              <div className="aspect-video w-full max-w-3xl mt-4 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  // ✅ Fixed livestream link here
                  src="https://www.youtube.com/embed/HaP007qT5HE?autoplay=1"
                  title="YouTube Livestream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>

          {/* Livestream Image */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg relative">
            <Image
              src="/images/kiyimba.jpg"
              alt="Sabbath July 26, 2025"
              fill
              className="object-cover"
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
    </section>
  )
}
