// lib/types.ts

export interface Minister {
  name: string
  title: string
  bio: string
  imageUrl?: string
}

export interface MinistersSection {
  heading: string
  subheading: string
  ministers: Minister[]
}
