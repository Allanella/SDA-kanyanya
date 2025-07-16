import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircleIcon, GalleryHorizontalIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

export function SermonsMediaSection() {
  const recordedSermons = [
    {
      title: "The Power of Forgiveness",
      preacher: "Pastor John Doe",
      date: "July 10, 2024",
      thumbnail: "/placeholder.svg?height=150&width=250",
      link: "#",
    },
    {
      title: "Living a Life of Purpose",
      preacher: "Elder Jane Smith",
      date: "July 3, 2024",
      thumbnail: "/placeholder.svg?height=150&width=250",
      link: "#",
    },
    {
      title: "Hope in Times of Trouble",
      preacher: "Deacon Mark Johnson",
      date: "June 26, 2024",
      thumbnail: "/placeholder.svg?height=150&width=250",
      link: "#",
    },
  ]

  return (
    <section id="sermons" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sermons & Media</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Catch up on our latest sermons, watch our livestream, and browse photo galleries from church events.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold">Watch Our Livestream</h3>
            <p className="text-muted-foreground">
              Join us live every Sabbath for our Divine Service and other special programs.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://www.youtube.com/yourchurchchannel" target="_blank" rel="noopener noreferrer">
                <PlayCircleIcon className="mr-2 h-5 w-5" /> Watch Live on YouTube
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">(Link to your church's YouTube or Facebook livestream)</p>
          </div>
          <div className="w-full h-[300px] bg-gray-200 rounded-xl flex items-center justify-center text-muted-foreground shadow-lg">
            <span className="text-lg">Livestream Embed Placeholder</span>
            {/* You can embed a YouTube or Facebook live stream here */}
          </div>
        </div>

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
                  width={400}
                  height={225}
                  alt={sermon.title}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <CardContent className="p-4 text-left">
                  <CardTitle className="text-lg font-semibold mb-1">{sermon.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {sermon.preacher} | {sermon.date}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-end">
                  <Button asChild variant="outline">
                    <Link href={sermon.link}>Watch Sermon</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

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
              src="/images/church-interior.png"
              width={400}
              height={250}
              alt="Church Interior"
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
            <Image
              src="/images/church-community.png"
              width={400}
              height={250}
              alt="Church Community Event"
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
            <Image
              src="/placeholder.svg?height=250&width=400"
              width={400}
              height={250}
              alt="Youth Program"
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
