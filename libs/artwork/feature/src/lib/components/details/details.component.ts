import { Component, Input } from '@angular/core';

@Component({
  selector: 'jurisin-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input() error = '';
  @Input() loading = true;
  @Input() image_id = '';
  @Input() artist_title = '';
  @Input() title = '';
  @Input() date_display = '';
  @Input() provenance_text = '';
}
