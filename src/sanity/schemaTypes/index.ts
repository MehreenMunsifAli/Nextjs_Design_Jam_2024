import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import order from './order';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef, food, order],
}
