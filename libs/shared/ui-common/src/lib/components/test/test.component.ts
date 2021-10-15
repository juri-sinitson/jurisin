import { Component, Input } from '@angular/core';

@Component({
  selector: 'jurisin-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @Input() input = '';
}
