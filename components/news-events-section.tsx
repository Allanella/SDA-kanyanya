import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, NewspaperIcon } from "lucide-react"

export function NewsEventsSection() {
  const newsItems = [
    {
      title: "Church Bulletin: July 13, 2024",
      date: "July 12, 2024",
      description: "Latest announcements, prayer requests, and church news.",
      link: "#",
    },
    {
      title: "Youth Camp Registration Now Open!",
      date: "July 1, 2024",
      description: "Sign up for our annual youth camp, August 15-20.",
      link: "#",
    },
    {
      title: "Community Health Fair Success",
      date: "June 25, 2024",
      description: "Recap of our recent health fair and community outreach.",
      link: "#",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual Revival Week",
      date: "August 1-7, 2024",
      time: "7:00 PM Daily",
      location: "Church Sanctuary",
      description: "A week of spiritual renewal with guest speakers.",
    },
    {
      title: "Pathfinder Investiture Ceremony",
      date: "September 14, 2024",
      time: "3:00 PM",
      location: "Church Hall",
      description: "Celebrating our Pathfinders' achievements.",
    },
    {
      title: "Thanksgiving Service",
      date: "October 26, 2024",
      time: "11:00 AM",
      location: "Church Sanctuary",
      description: "A special service to give thanks.",
    },
  ]

  return (
    <section id="news-events" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">News & Events</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Stay updated with the latest church news, announcements, and upcoming events.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center justify-center lg:justify-start">
              <NewspaperIcon className="mr-3 h-8 w-8 text-primary" /> Church Bulletins & Announcements
            </h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="text-left shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Link href={item.link} className="text-primary hover:underline text-sm font-medium mt-2 block">
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8 bg-transparent">
              <Link href="#">View All News</Link>
            </Button>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center justify-center lg:justify-start">
              <CalendarIcon className="mr-3 h-8 w-8 text-primary" /> Upcoming Events
            </h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="text-left shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {event.date} | {event.time} | {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8 bg-transparent">
              <Link href="#">View Full Calendar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
