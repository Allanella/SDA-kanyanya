import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CalendarDaysIcon, BookOpenIcon, HandshakeIcon, MusicIcon } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Worship Schedule</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Join us for worship, study, and fellowship. All are welcome!
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CalendarDaysIcon className="h-8 w-8 text-primary mb-2 mx-auto" />
              <CardTitle>Sabbath School</CardTitle>
              <CardDescription>Saturdays, 9:30 AM - 10:45 AM</CardDescription>
            </CardHeader>
            <CardContent>Engage in Bible study and discussion in small groups for all ages.</CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <BookOpenIcon className="h-8 w-8 text-primary mb-2 mx-auto" />
              <CardTitle>Divine Service</CardTitle>
              <CardDescription>Saturdays, 11:00 AM - 1:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              Experience inspiring worship, uplifting music, and a powerful message from God's Word.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <HandshakeIcon className="h-8 w-8 text-primary mb-2 mx-auto" />
              <CardTitle>Midweek Prayer Meeting</CardTitle>
              <CardDescription>Wednesdays, 6:00 PM - 7:00 PM</CardDescription>
            </CardHeader>
            <CardContent>A time for prayer, testimony, and spiritual encouragement.</CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <MusicIcon className="h-8 w-8 text-primary mb-2 mx-auto" />
              <CardTitle>Afternoon Programs</CardTitle>
              <CardDescription>Saturdays, 3:00 PM onwards</CardDescription>
            </CardHeader>
            <CardContent>Includes AY (Adventist Youth), Bible Study, and Choir rehearsals.</CardContent>
          </Card>
        </div>
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-bold">Special Events Calendar</h3>
          <p className="text-muted-foreground">
            Check our{" "}
            <Link href="#news-events" className="text-primary hover:underline">
              News & Events
            </Link>{" "}
            section for upcoming special events, revival weeks, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
