import { defineField, defineType } from 'sanity'

export const ministersSection = defineType({
  name: 'ministersSection',
  title: 'Ministers Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the ministers section, e.g., "Our Spiritual Leaders"',
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'text',
      description: 'Brief description for the ministers section',
    }),
    defineField({
      name: 'ministers',
      title: 'Ministers List',
      type: 'array',
      of: [
        defineField({
          name: 'minister', // Add a name for the object type
          title: 'Minister',
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Full Name' },
            { name: 'title', type: 'string', title: 'Position / Title' },
            { name: 'bio', type: 'text', title: 'Biography' },
            {
              name: 'image',
              type: 'image',
              title: 'Profile Image',
              options: { hotspot: true },
              description: 'Upload a portrait of the minister',
            },
          ],
        }),
      ],
      description: 'List of all ministers with their name, title, bio, and image',
    }),
  ],
})
