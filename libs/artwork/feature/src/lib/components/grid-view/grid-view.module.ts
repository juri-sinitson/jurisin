import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridViewComponent } from './grid-view.component';
import { GridViewShellComponent } from './grid-view-shell.component';
import { ErrorModule, LoadingModule } from '@jurisin/shared/ui-common';

@NgModule({
  declarations: [
    GridViewComponent,
    GridViewShellComponent,
  ],
  imports: [
    CommonModule,

    // Own
    ErrorModule,
    LoadingModule,
  ],
  exports: [
    GridViewShellComponent,
  ]
})
export class GridViewModule { }
