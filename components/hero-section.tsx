import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern-overlay opacity-10 z-0"></div>

      <div className="container px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl leading-tight break-words">
                Seventh-day Adventist Church Kanyanya
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-0 leading-relaxed break-words">
                A vibrant community of faith, hope, and love, located 5 miles on Gayaza road, Kampala, Uganda.
              </p>
            </div>

            <Card className="bg-primary-foreground text-primary p-6 rounded-lg shadow-xl max-w-md mx-auto lg:mx-0">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-center">Worship & Study Times</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-2 text-lg font-medium">
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

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-3 pt-4">
              <Button
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 text-base w-full sm:w-auto"
              >
                <Link href="#sermons">Watch Livestream</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-6 py-3 text-base w-full sm:w-auto"
              >
                <Link href="#giving">Online Giving</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-6 py-3 text-base w-full sm:w-auto"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Sticky Image Container */}
          <div
            className="relative lg:sticky lg:top-[4.5rem] lg:z-20"
            style={{ overflow: "visible" }}
          >
            <Image
              src="/images/drone.png"
              width={650}
              height={450}
              alt="Seventh-day Adventist Church Kanyanya Exterior"
              className="mx-auto aspect-[4/3] rounded-xl object-cover sm:w-full shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  )
}