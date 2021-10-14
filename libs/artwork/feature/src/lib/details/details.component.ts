import { Component, Input } from '@angular/core';

@Component({
  selector: 'jurisin-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input() image = '';
  @Input() artist = '';
  @Input() title = '';
  @Input() date = '';
  @Input() placeOfOrigin = '';
  @Input() department_title = '';
}
