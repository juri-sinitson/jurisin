import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';


import { artworkEntityMetadata } from './+state/artwork.metadata';

import { ArtworkDataService } from './+state/artwork-data.service';

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
  providers: [
    ArtworkDataService,
  ]
})
export class ArtworkApiModule {
  constructor(
    entityDataService: EntityDataService,
    artworkDataService: ArtworkDataService,
  ) {
    entityDataService.registerService('Artwork', artworkDataService);
  }
}
