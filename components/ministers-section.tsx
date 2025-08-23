"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { client } from "@/lib/sanity"
import { ministersSectionQuery } from "@/lib/queries"
import type { MinistersSection as MinistersSectionType } from "@/lib/types"

export function MinistersSection() {
  // Default hardcoded ministers
  const defaultMinisters = [
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
      image: "/images/origye.jpg",
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

  const [data, setData] = useState<MinistersSectionType | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (client) {
          const res: MinistersSectionType = await client.fetch(ministersSectionQuery)
          if (res?.ministers?.length) {
            setData(res)
          }
        } else {
          console.error("Sanity client is not initialized.")
        }
      } catch (err) {
        console.error("Failed to fetch ministers from Sanity:", err)
      }
    }

    fetchData()
  }, [])

  const ministers = data?.ministers?.length ? data.ministers : defaultMinisters
  const heading = data?.heading || "Our Spiritual Leaders"
  const subheading =
    data?.subheading || "Meet the dedicated individuals who guide and serve our church family."

  return (
    <section
      id="ministers"
      className="scroll-mt-20 w-full py-12 md:py-24 lg:py-32 bg-gray-50 px-6 sm:px-8 md:px-12 lg:px-16"
      aria-labelledby="ministers-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2
            id="ministers-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-gray-900"
          >
            {heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {subheading}
          </p>
        </div>

        {/* Ministers Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ministers.map((minister, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-primary bg-gray-200 flex items-center justify-center">
                <Image
                  src={"image" in minister && minister.image ? minister.image : "/placeholder.svg"}
                  width={144}
                  height={144}
                  alt={minister.name || "Church leader"}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold leading-snug break-words text-gray-900">
                  {minister.name}
                </CardTitle>
                <CardDescription className="text-primary truncate">{minister.title}</CardDescription>
              </CardHeader>

              <CardContent className="p-0 text-gray-700">
                <p>{minister.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
