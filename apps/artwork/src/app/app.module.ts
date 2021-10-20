import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { ArtworkFeatureGridViewModule } from '@jurisin/artwork/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,

    // NgRx
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

    // Own
    // Artwork feature modules
    ArtworkFeatureGridViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
