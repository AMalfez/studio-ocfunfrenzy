import { defineType, defineField } from 'sanity';

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
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
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    // defineField({
    //   name: 'approved',
    //   title: 'Approved',
    //   type: 'boolean',
    //   description: 'Approve comment to show on site',
    // }),
    defineField({
      name: 'blogPost',
      title: 'Blog Post',
      type: 'reference',
      to: [{ type: 'blogPost' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    })
  ],
});
