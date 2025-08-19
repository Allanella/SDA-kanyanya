import { defineField, defineType } from 'sanity'

export const ministriesSection = defineType({
  name: 'ministriesSection',
  title: 'Ministries Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the ministries section, e.g., "Our Ministries"',
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'text',
      description: 'Brief description for the ministries section',
    }),
    defineField({
      name: 'ministries',
      title: 'Ministries List',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'ministry',
          title: 'Ministry',
          fields: [
            defineField({
              name: 'name',
              title: 'Ministry Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'link',
              title: 'Link to Ministry Page',
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Name of the icon to display, e.g., "UsersIcon" or "MusicIcon"',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        }),
      ],
      description: 'List of ministries including name, description, link, and icon',
    }),
  ],
})
