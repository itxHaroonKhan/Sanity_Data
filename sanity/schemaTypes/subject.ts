import { defineField, defineType } from "sanity";

export const Sabject = defineType({
    name: 'subject',
    type: 'document',
    title: 'Subject',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Subject Name',
       
        }),
        
    ],


    
});