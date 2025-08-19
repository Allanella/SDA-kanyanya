import { defineField, defineType } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
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
    defineField({ name: 'date', type: 'datetime', title: 'Date' }),
    defineField({ name: 'coverImage', type: 'image', title: 'Cover Image' }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }],
    }),
    defineField({ name: 'category', type: 'string', title: 'Category' }),
  ],
})
