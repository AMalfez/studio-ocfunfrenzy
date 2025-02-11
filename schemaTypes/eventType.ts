import { defineType, defineField } from 'sanity';

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'reference',
      to: [{ type: 'organizer' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'endDate',
        title: 'End Date',
        type: 'date',
        validation: (Rule) => Rule.required().custom((endDate, context) => {
            if(!endDate) return 'Please enter End Date'
          const startDate = (context.parent as { startDate?: string })?.startDate;
          if (startDate && endDate < startDate) {
            return 'End date must be after start date';
          }
          return true;
        }),
      }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    })
  ],
});
