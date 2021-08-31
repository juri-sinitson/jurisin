import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductFeatureModule } from '@jurisin/product/feature';
import { LoginFeatureModule } from '@jurisin/login/feature';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    
    // jurisin modules
    ProductFeatureModule,
    LoginFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
