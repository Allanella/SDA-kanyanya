import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  UsersIcon,
  BabyIcon as ChildIcon,
  HeartHandshakeIcon,
  BookOpenIcon,
  MusicIcon,
  BriefcaseMedicalIcon,
  FanIcon as FamilyIcon,
  LeafIcon,
  SparklesIcon,
} from "lucide-react"
import Link from "next/link"

export function MinistriesSection() {
  const ministries = [
    {
      name: "Children’s Ministry",
      description: "Nurturing our youngest members in faith and character.",
      icon: ChildIcon,
      link: "#",
    },
    {
      name: "Youth / Adventist Youth (AY)",
      description: "Engaging and empowering our youth for Christ.",
      icon: UsersIcon,
      link: "#",
    },
    {
      name: "Women’s Ministries",
      description: "Supporting and empowering women in their spiritual journey.",
      icon: HeartHandshakeIcon,
      link: "#",
    },
    {
      name: "Men’s Ministries",
      description: "Building strong men of faith and service.",
      icon: UsersIcon,
      link: "#",
    },
    {
      name: "Sabbath School",
      description: "In-depth Bible study and fellowship for all ages.",
      icon: BookOpenIcon,
      link: "#",
    },
    {
      name: "Personal Ministries",
      description: "Equipping members for evangelism and outreach.",
      icon: SparklesIcon,
      link: "#",
    },
    {
      name: "Pathfinder & Adventurer Clubs",
      description: "Character development and adventure for children and youth.",
      icon: LeafIcon,
      link: "#",
    },
    {
      name: "Music & Choir Ministry",
      description: "Leading worship through uplifting songs and hymns.",
      icon: MusicIcon,
      link: "#",
    },
    {
      name: "Family Life Ministry",
      description: "Strengthening families through biblical principles.",
      icon: FamilyIcon,
      link: "#",
    },
    {
      name: "Health Ministry",
      description: "Promoting holistic health and wellness.",
      icon: BriefcaseMedicalIcon,
      link: "#",
    },
  ]

  return (
    <section id="ministries" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Ministries</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Discover the various ministries dedicated to serving our church and community.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon
            return (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0 mb-4">
                  <Icon className="h-12 w-12 text-primary mx-auto" />
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2">{ministry.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{ministry.description}</CardDescription>
                  <Link href={ministry.link} className="text-primary hover:underline text-sm font-medium">
                    Learn More
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
