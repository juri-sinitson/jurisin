// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

// Own
import { CardsFullHeightComponent } from './cards-full-height.component';

@NgModule({
  declarations: [
    CardsFullHeightComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    BrowserAnimationsModule,

    // PrimeNG
    CardModule,
    PanelModule,
  ],
  exports: [
    CardsFullHeightComponent,
  ]
})
export class CardsFullHeightModule { }
