import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'startDate', type: 'datetime', title: 'Start Date' }),
    defineField({ name: 'endDate', type: 'datetime', title: 'End Date' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({
      name: 'ministry',
      type: 'reference',
      title: 'Ministry',
      to: [{ type: 'ministry' }],
    }),
    defineField({ name: 'image', type: 'image', title: 'Image' }),
    defineField({
      name: 'registrationRequired',
      type: 'boolean',
      title: 'Registration Required',
    }),
    defineField({
      name: 'contactPerson',
      type: 'object',
      title: 'Contact Person',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
      ],
    }),
  ],
})
