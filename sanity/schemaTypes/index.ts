import { type SchemaTypeDefinition } from 'sanity'
import { students } from './students'
import { Teacher } from './Teacher'
import { Sabject } from './subject'
import { textDocument } from './text'
import { BigDocument } from './Big'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [students,Teacher,Sabject,textDocument,BigDocument],
}
