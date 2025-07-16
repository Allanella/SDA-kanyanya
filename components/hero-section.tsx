import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Import Card components

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden" // Adjusted gradient and added overflow-hidden
    >
      {/* Optional: Add a subtle background pattern or overlay for more depth */}
      <div className="absolute inset-0 bg-pattern-overlay opacity-10 z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {" "}
        {/* Ensure content is above overlay */}
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_650px] items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl/none leading-tight">
                Seventh-day Adventist Church Kanyanya
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl lg:text-2xl mx-auto lg:mx-0 opacity-90">
                A vibrant community of faith, hope, and love, located 5 miles on Gayaza road, Kampala, Uganda.
              </p>
            </div>

            {/* Service Times Card */}
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

            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start pt-4">
              <Button
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg"
              >
                <Link href="#sermons">Watch Livestream</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-8 py-3 text-lg"
              >
                <Link href="#giving">Online Giving</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-8 py-3 text-lg"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/images/knn.png" // Ensure this path is correct for your image
            width="650"
            height="450"
            alt="Seventh-day Adventist Church Kanyanya Exterior"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out" // Adjusted aspect ratio, added shadow and hover effect
          />
        </div>
      </div>
    </section>
  )
}
