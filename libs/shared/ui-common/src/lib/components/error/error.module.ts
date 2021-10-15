// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import {MessageModule} from 'primeng/message';

// Own
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    // Angular
    CommonModule,

    // Own
    MessageModule,
  ],
  exports: [
    ErrorComponent,
  ]
})
export class ErrorModule { }
