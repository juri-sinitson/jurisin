import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService extends EntityCollectionServiceBase<Product> { 
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }
}
