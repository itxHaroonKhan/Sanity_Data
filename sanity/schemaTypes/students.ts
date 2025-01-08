
import { list } from "postcss";
import { defineType } from "sanity";

export const students = defineType({ 
name: 'students',
type: 'document',
title: 'students',
fields: [
    {
    name: 'name',
    type: 'string',
    title: 'students Name',
},
{
    name: 'age',
    type: 'number',
    title: 'students Age',
},


{
    name:'gender',
    type:'string',
    title:'Gender',
    options : {
list:[

{title:'Male', value:'male'},
{title:'Female', value:'female' },
{title:'Transgender', value:'transgnder' },

],
layout:"dropdown",
    },
},

{
    title: 'Release date',
    name: 'releaseDate',
    type: 'date'
  },

    {
        name: 'image',
        type: 'image',
        title: 'Image',
    },
 ],


},

);