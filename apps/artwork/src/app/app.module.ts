import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GridViewModule } from '@jurisin/artwork/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GridViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
