// lib/queries.ts

export const ministersSectionQuery = `*[_type == "ministersSection"][0]{
  heading,
  subheading,
  ministers[] {
    name,
    title,
    bio,
    "imageUrl": image.asset->url
  }
}`
