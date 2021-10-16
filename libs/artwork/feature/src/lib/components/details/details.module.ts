import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { DetailsComponent } from './details.component';
import { DetailsDynamicDialogShellComponent } from './details-dynamic-dialog-shell.component';
import { ErrorModule, LoadingModule } from '@jurisin/shared/ui-common';

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

        // Own
        ErrorModule,
        LoadingModule,
  ],
  exports: [
    DetailsDynamicDialogShellComponent,
  ]
})
export class DetailsModule { }
