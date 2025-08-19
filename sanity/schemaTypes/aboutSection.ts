import { defineField, defineType } from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the about section, e.g., "Our Mission and Vision"',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Text',
      type: 'text',
      description: 'The church’s mission statement',
    }),
    defineField({
      name: 'history',
      title: 'History Text',
      type: 'text',
      description: 'Brief history or background of the church',
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Value Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description' }),
          ],
        },
      ],
      description: 'List of church core values with title and description',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows focal point selection in Studio
      },
      description: 'Main image for the about section',
    }),
  ],
})
