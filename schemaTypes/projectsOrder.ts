import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projectsOrder',
  title: 'Projects Order',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      description: 'Drag and drop to reorder your projects',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
