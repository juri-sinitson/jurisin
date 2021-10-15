import { Component, Input } from '@angular/core';

@Component({
  selector: 'jurisin-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input() message = '';
}
