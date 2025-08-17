import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

// Sanity configuration - these will be undefined initially until you set up Sanity
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"

// Create client only if we have the required environment variables
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

// Helper function for generating image URLs (only works if client exists)
export const urlFor = (source: SanityImageSource) => {
  if (!client) return null
  try {
    const builder = imageUrlBuilder(client)
    return builder.image(source)
  } catch (error) {
    console.warn("Image URL builder not available:", error)
    return null
  }
}

// TypeScript interfaces for our data
export interface Sermon {
  _id: string
  title: string
  slug: { current: string }
  speaker: string
  date: string
  description?: string
  audioUrl?: string
  videoUrl?: string
  thumbnailUrl?: string
  series?: string
  tags?: string[]
  featured?: boolean
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  startDate: string
  endDate?: string
  location: string
  ministryName?: string
  imageUrl?: string
  registrationRequired?: boolean
  contactPerson?: {
    name?: string
    phone?: string
    email?: string
  }
}

export interface Announcement {
  _id: string
  title: string
  content: any[]
  priority: "low" | "normal" | "high" | "urgent"
  publishDate: string
  expiryDate?: string
  showOnHomepage?: boolean
  category?: string
}

export interface Ministry {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  leader?: {
    name?: string
    email?: string
    phone?: string
    bio?: string
  }
  meetingSchedule?: string
  imageUrl?: string
  activities?: string[]
  targetAudience?: string
}

// GROQ queries
export const queries = {
  // Get all sermons
  sermons: `*[_type == "sermon"] | order(date desc) {
    _id,
    title,
    slug,
    speaker,
    date,
    description,
    "audioUrl": audioFile.asset->url,
    "videoUrl": videoFile.asset->url,
    "thumbnailUrl": thumbnail.asset->url,
    series,
    tags,
    featured
  }`,

  // Get featured sermons
  featuredSermons: `*[_type == "sermon" && featured == true] | order(date desc) [0...3] {
    _id,
    title,
    slug,
    speaker,
    date,
    description,
    "thumbnailUrl": thumbnail.asset->url,
    series
  }`,

  // Get upcoming events
  upcomingEvents: `*[_type == "event" && startDate >= now()] | order(startDate asc) {
    _id,
    title,
    slug,
    description,
    startDate,
    endDate,
    location,
    "ministryName": ministry->name,
    "imageUrl": image.asset->url,
    registrationRequired,
    contactPerson
  }`,

  // Get current announcements
  announcements: `*[_type == "announcement" && publishDate <= now() && (expiryDate >= now() || !defined(expiryDate))] | order(priority desc, publishDate desc) {
    _id,
    title,
    content,
    priority,
    publishDate,
    showOnHomepage,
    category
  }`,

  // Get all ministries
  ministries: `*[_type == "ministry"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    leader,
    meetingSchedule,
    "imageUrl": image.asset->url,
    activities,
    targetAudience
  }`,

  // Get gallery albums
  gallery: `*[_type == "gallery"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    "coverImageUrl": coverImage.asset->url,
    "imageCount": count(images),
    category
  }`,
} as const
