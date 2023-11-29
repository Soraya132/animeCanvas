import { type SchemaTypeDefinition } from 'sanity'
import resource from './schemas/resource'
import resourcePlaylist from './schemas/resourcePlaylist'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resource,resourcePlaylist],
}
