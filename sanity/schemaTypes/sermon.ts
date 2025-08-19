import { defineField, defineType } from 'sanity'

export const sermon = defineType({
  name: 'sermon',
  title: 'Sermon / Media',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'speaker', type: 'string', title: 'Speaker / Preacher' }),
    defineField({ name: 'date', type: 'date', title: 'Date' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),

    // Media files
    defineField({ name: 'audioFile', type: 'file', title: 'Audio File' }),
    defineField({ name: 'videoFile', type: 'file', title: 'Video File' }),
    defineField({ name: 'youtubeLink', type: 'url', title: 'YouTube Link' }),

    // Thumbnail / Images
    defineField({ name: 'thumbnail', type: 'image', title: 'Thumbnail' }),
    defineField({
      name: 'photoGallery',
      type: 'array',
      title: 'Photo Gallery',
      of: [{ type: 'image' }],
    }),

    defineField({ name: 'series', type: 'string', title: 'Series' }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured' }),

    // Livestream option
    defineField({ name: 'isLivestream', type: 'boolean', title: 'Is Livestream' }),
    defineField({
      name: 'livestreamLink',
      type: 'url',
      title: 'Livestream YouTube Link',
      hidden: ({ parent }) => !parent?.isLivestream,
    }),
  ],
})
