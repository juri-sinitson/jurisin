import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsDynamicDialogShellComponent } from './details-dynamic-dialog-shell.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    DetailsComponent,
    DetailsDynamicDialogShellComponent,
  ],
  imports: [
    // Angular
    CommonModule,

    // PrimeNG
    CardModule,
  ],
  exports: [
    DetailsDynamicDialogShellComponent,
  ]
})
export class DetailsModule { }
