import { defineType, defineField } from "sanity"

export const ministersSection = defineType({
  name: "ministersSection",
  title: "Ministers Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Section heading (e.g., 'Our Spiritual Leaders')",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      description: "Section subheading (optional)",
    }),
    defineField({
      name: "ministers",
      title: "Ministers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "bio",
              title: "Bio",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "title",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "subheading",
    },
  },
})
