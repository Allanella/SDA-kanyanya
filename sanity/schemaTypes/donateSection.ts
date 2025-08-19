import { defineField, defineType } from 'sanity'

export const donateSection = defineType({
  name: 'donateSection',
  title: 'Donate Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the donate section, e.g., "Support Our Ministry"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Introductory text describing why people should donate',
    }),
    defineField({
      name: 'methods',
      title: 'Donation Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Method Title' }),
            defineField({ name: 'description', type: 'text', title: 'Method Description' }),
            defineField({ name: 'link', type: 'url', title: 'Link URL' }),
            defineField({
              name: 'external',
              type: 'boolean',
              title: 'External Link?',
              description: 'If true, the link opens in a new tab',
            }),
            defineField({
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              description:
                'The icon to display, e.g., "HeartIcon", "CreditCardIcon", "BanknoteIcon". You can map this to your icon components in the frontend.',
            }),
          ],
        },
      ],
      description: 'List of donation methods with title, description, link, and icon',
    }),
  ],
})
