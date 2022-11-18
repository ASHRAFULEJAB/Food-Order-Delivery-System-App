export default {
    name: 'featured',
    title: 'Featured Menu categories ',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured category name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        validation: (Rule) => Rule.max(200),
      },
      
      {
        name: 'resturants',
        title: 'Resturants',
          type: 'array',
        of:[{type:"reference",to:[{type:"resturant"}]}]
        
      },
      
    ],
    
  }
  