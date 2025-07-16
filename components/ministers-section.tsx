import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function MinistersSection() {
  const ministers = [
    {
      name: "Pastor Kisakye Simon",
      title: "Senior Pastor",
      bio: "Pastor Kisakye has been serving the Kanyanya community for over 10 years, dedicated to spiritual growth and community outreach.",
      image: "/images/minister-1.png",
    },
    {
      name: "Pr Origye Ezekiel",
      title: "Associate Pastor",
      bio: "Pr Ezekiel provides invaluable leadership and guidance, overseeing various church ministries and initiatives.",
      image: "/images/minister-2.png",
    },
    {
      name: "Elder Mirembe Eddy",
      title: "First Elder",
      bio: "Elder Mirembe is passionate about nurturing the next generation, leading our vibrant youth programs and activities.",
      image: "/images/mirembe.JPG",
    },
    {
      name: "Mrs Jenipher Mukasa",
      title: "Women's Ministries Leader",
      bio: "Mrs Mukasa empowers women through various programs, fostering fellowship and spiritual development.",
      image: "/placeholder.svg?height=150&width=150", // Placeholder for new minister
    },
  ]

  return (
    <section id="ministers" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Spiritual Leaders</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Meet the dedicated individuals who guide and serve our church family.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ministers.map((minister, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={minister.image || "/placeholder.svg"}
                width={150}
                height={150}
                alt={minister.name}
                className="rounded-full object-cover mb-4 border-4 border-primary"
              />
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold">{minister.name}</CardTitle>
                <CardDescription className="text-primary">{minister.title}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>{minister.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
