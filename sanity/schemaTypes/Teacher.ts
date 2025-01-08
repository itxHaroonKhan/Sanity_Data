import { validation } from "sanity";

export const Teacher = {
    name: 'teacher',
    type: 'document',
    title: 'Teacher',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Teacher Name',
            validation: (Rule: any) => Rule.required().error('Enter Teacher Name'),
            
        },
        {
            name: 'age',
            type: 'number',
            title: 'Teacher Age',
            validation: (Rule: any) => Rule.max(60).min(10).warning('Are you sure?'),
             hidden: ({ document } : any) => document.name === 'Haroon Rasheed',
             readonly: ({ document } : any) => document.name === 'Danish',
            
        },
        {
            name: 'subjects',
            type: 'array',
            title: 'Subjects',
            hidden: ({ document }: any) => document.age <= 18, // Corrected comparison operator
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'subject' }],
                },
            ],
        },
        {
            name: 'students',
            type: 'array',
            title: 'Students',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'students' }],
                },
            ],
        },
        
    ],
};
