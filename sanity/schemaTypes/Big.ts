export const BigDocument = {
    name: 'bigDocument',
    type: 'document',
    title: 'Big Document',
    fields: [
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          }
    ],
};
