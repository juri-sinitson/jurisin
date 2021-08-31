import { EntityMetadata } from '@ngrx/data';
import { Product } from '../types/product';

export const productEntityMetadata: EntityMetadata<Product> = {
  entityName: 'Product',
};
