import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookIcon, HeartPulseIcon, DownloadIcon, LinkIcon } from "lucide-react"
import React from "react"

// Placeholder icon components for Prime Radio and 3ABN TV
function PrimeRadioIcon() {
  return (
    <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
      PR
    </div>
  )
}

function ThreeABNIcon() {
  return (
    <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
      3ABN
    </div>
  )
}

export function ResourcesSection() {
  const resources = [
    {
      title: "Sabbath School Quarterlies",
      description: "Download current and past Bible study guides.",
      icon: BookIcon,
      link: "#",
    },
    {
      title: "Health & Lifestyle Tips",
      description: "Discover articles and guides on holistic health.",
      icon: HeartPulseIcon,
      link: "#",
    },
    {
      title: "Adventist Publications",
      description: "Access books and materials from Adventist authors.",
      icon: DownloadIcon,
      link: "#",
    },
    {
      title: "Adventist.org",
      description: "Official website of the Seventh-day Adventist Church.",
      icon: LinkIcon,
      link: "https://www.adventist.org/",
      external: true,
    },
    {
      title: "Hope Channel",
      description: "Watch inspiring Christian programming.",
      icon: LinkIcon,
      link: "https://www.hopechannel.com/",
      external: true,
    },
    {
      title: "Prime Radio",
      description: "Tune into Prime Radio for uplifting music and messages.",
      icon: PrimeRadioIcon,
      link: "https://primeradio.example.com", // Replace with actual URL
      external: true,
    },
    {
      title: "3ABN TV",
      description: "Watch inspiring Christian programming on 3ABN TV.",
      icon: ThreeABNIcon,
      link: "https://3abntv.org",
      external: true,
    },
  ]

  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resources</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Explore valuable resources for spiritual growth, health, and information about the Adventist faith.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0 mb-4">
                  <Icon className="h-12 w-12 text-primary mx-auto" />
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2">{resource.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{resource.description}</CardDescription>
                  <Link
                    href={resource.link}
                    target={resource.external ? "_blank" : "_self"}
                    rel={resource.external ? "noopener noreferrer" : ""}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {resource.external ? "Visit Site" : "Access Resource"}
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
