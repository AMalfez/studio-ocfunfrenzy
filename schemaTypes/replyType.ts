import { defineType, defineField } from 'sanity';

export const replyType = defineType({
  name: 'reply',
  title: 'Reply',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'reply',
      title: 'Reply',
      type: 'text',
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'reference',
      to: [{ type: 'comment' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    })
  ],
});
