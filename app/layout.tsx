import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Seventh-day Adventist Church Kanyanya",
  description: "Official website for Seventh-day Adventist Church Kanyanya, located in Kampala, Uganda.",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        {" "}
        {/* Added overflow-x-hidden here */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
