// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
  ],
}
