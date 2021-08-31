import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// PrimeNG
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


import { ProductsComponent } from './products/products.component';
import { productEntityMetadata } from './+state/product.metadata';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    
    // PrimeNG
    TableModule,
    ButtonModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Product: productEntityMetadata,
      },
    }),
  ],
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent,
  ],
})
export class ProductFeatureModule {}
