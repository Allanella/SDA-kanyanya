import { defineField, defineType } from 'sanity'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the contact section, e.g., "Get in Touch"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief introductory text for the contact section',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Physical location of the church',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Official contact email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Primary phone number',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'WhatsApp contact number',
    }),
    defineField({
      name: 'poBox',
      title: 'P.O. Box',
      type: 'string',
      description: 'Postal address of the church',
    }),
    defineField({
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'Church office working hours',
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Embed URL for Google Maps iframe',
    }),
    defineField({
      name: 'contactFormHeading',
      title: 'Contact Form Heading',
      type: 'string',
      description: 'Heading above the contact form, e.g., "Send Us a Message"',
    }),
    defineField({
      name: 'contactFormDescription',
      title: 'Contact Form Description',
      type: 'text',
      description: 'Optional description or instructions for the contact form',
    }),
  ],
})
