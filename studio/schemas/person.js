export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ]
}