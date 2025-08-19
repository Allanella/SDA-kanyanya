import { defineField, defineType } from 'sanity'

export const newsItem = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'date', type: 'date', title: 'Date' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'link', type: 'url', title: 'Link' }),
  ],
})

export const eventItem = defineType({
  name: 'eventItem',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'date', type: 'date', title: 'Date' }),
    defineField({ name: 'time', type: 'string', title: 'Time' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
  ],
})

export const newsEventsSection = defineType({
  name: 'newsEventsSection',
  title: 'News & Events Section',
  type: 'document',
  fields: [
    defineField({
      name: 'newsItems',
      title: 'News Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'newsItem' }] }],
    }),
    defineField({
      name: 'upcomingEvents',
      title: 'Upcoming Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'eventItem' }] }],
    }),
  ],
})
