import {MyCustomStringInput} from '../components/MyCustomStringInput'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(3).error('A title of min. 3 characters is required'),
        Rule.max(50).warning('Shorter title are usually better'),
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(3).error('A title of min. 3 characters is required'),
        Rule.max(50).warning('Shorter title are usually better'),
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'info',
      title: 'Info',
      type: 'string',
      components: {
        input: MyCustomStringInput,
      },
      validation: Rule => Rule.required()
    },
  ],
}
