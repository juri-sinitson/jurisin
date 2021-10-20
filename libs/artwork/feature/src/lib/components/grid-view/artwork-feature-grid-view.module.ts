// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

// Own
import { GridViewComponent } from './grid-view.component';
import { DetailsModule } from '../details/details.module';
import { ErrorModule, LoadingModule } from '@jurisin/shared/ui-common';
import { GridViewShellComponent } from './grid-view-shell.component';
import { ArtworkModule } from '@jurisin/artwork/api';


@NgModule({
  declarations: [
    GridViewComponent,
    GridViewShellComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    BrowserAnimationsModule,

    // PrimeNG
    DataViewModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule,

    // Own
    DetailsModule,
    ErrorModule,
    LoadingModule,
    ArtworkModule,
  ],
  exports: [
    GridViewShellComponent,
  ]
})
export class ArtworkFeatureGridViewModule { }
