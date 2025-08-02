import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function MinistersSection() {
  const ministers = [
    {
      name: "Pastor Kisakye Simon",
      title: "Senior Pastor",
      bio: "Pastor Kisakye has been serving the Kanyanya community for over 4 years, dedicated to spiritual growth and community outreach.",
      image: "/images/pastor.jpg",
    },
    {
      name: "Pr Ezekiel Oligye",
      title: "Associate Pastor",
      bio: "Pr Ezekiel provides invaluable leadership and guidance, overseeing various church ministries and initiatives.",
      image: "/images/placeholder-user.jpg",
    },
    {
      name: "Mirembe Eddy",
      title: "First Elder",
      bio: "Elder Mirembe is passionate about nurturing the next generation, leading our vibrant youth programs and activities.",
      image: "/images/mirembe.jpg",
    },
    {
      name: "Mrs Kigozi Margret",
      title: "Women's Ministries Leader",
      bio: "Margret empowers women through various programs, fostering fellowship and spiritual development.",
      image: "/images/kigozi.png",
    },
  ]

  return (
    <section
      id="ministers"
      className="w-full py-12 md:py-24 lg:py-32 bg-background px-6 sm:px-8 md:px-12 lg:px-16"
      style={{ boxSizing: "border-box" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 text-center px-2 sm:px-4 md:px-8 flex flex-col items-center min-w-0"
          style={{ boxSizing: "border-box" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Our Spiritual Leaders
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-normal break-words max-w-full px-2"
            style={{ wordBreak: "break-word", overflowWrap: "break-word", boxSizing: "border-box" }}
          >
            Meet the dedicated individuals who guide and serve our church family.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ministers.map((minister, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-0"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-primary flex items-center justify-center bg-muted">
                <Image
                  src={minister.image || "/placeholder.svg"}
                  width={144}
                  height={144}
                  alt={minister.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader className="p-0 mb-2 min-w-0">
                <CardTitle className="text-xl font-semibold leading-snug break-words">{minister.name}</CardTitle>
                <CardDescription className="text-primary truncate">{minister.title}</CardDescription>
              </CardHeader>

              <CardContent className="p-0 text-muted-foreground min-w-0">
                <p className="break-words">{minister.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
