import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { artworkEntityMetadata } from './+state/artwork.metadata';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Artwork: artworkEntityMetadata,
      },
    }),
  ],
})
export class ArtworkApiModule {}
