"use client"

import React from "react"
import { HeartIcon, CreditCardIcon, BanknoteIcon } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DonateSection() {
  const methods = [
    {
      title: "Give Online",
      description: "Make a secure donation online via your debit/credit card.",
      icon: CreditCardIcon,
      link: "https://your-online-giving-platform.com", // replace with actual link
      external: true,
    },
    {
      title: "Mobile Money / Bank",
      description: "Use mobile money or bank transfer. View details here.",
      icon: BanknoteIcon,
      link: "/donate-details", // optional internal page with Momo/bank info
      external: false,
    },
    {
      title: "Why Give?",
      description: "Learn more about how your support helps our mission.",
      icon: HeartIcon,
      link: "/about-giving", // optional internal page
      external: false,
    },
  ]

  return (
    <section id="donate" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">Support Our Ministry</h2>
          <p className="max-w-[850px] text-green-700 md:text-xl mx-auto">
            Your generous contributions help us spread the gospel, serve our community, and grow together in faith.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0 mb-4">
                  <Icon className="h-12 w-12 text-green-700 mx-auto" />
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2">{method.title}</CardTitle>
                  <CardDescription className="text-green-600 mb-4">{method.description}</CardDescription>
                  <Link
                    href={method.link}
                    target={method.external ? "_blank" : "_self"}
                    rel={method.external ? "noopener noreferrer" : ""}
                    className="text-green-800 hover:underline text-sm font-medium"
                  >
                    {method.external ? "Donate Now" : "Learn More"}
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
