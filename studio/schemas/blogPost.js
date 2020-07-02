export default {
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: '5',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
      validation: Rule => Rule.required(),
      description: 'If the author does not already appear in this list, you\'ll need to create a new \'Person\' document for them first.',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
      description: 'Publish date',
    },    
  ]
}