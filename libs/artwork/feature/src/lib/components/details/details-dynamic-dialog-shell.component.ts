import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'jurisin-details-dynamic-dialog-shell',
  template: `
    <h1>{{id}}</h1>
    <jurisin-details
      [image_id]="image_id"
      [artist_title]="artist_title"
      [title]="title"
      [date_display]="date_display"
      [provenance_text]="provenance_text"
    ></jurisin-details>
  `,
})
export class DetailsDynamicDialogShellComponent implements OnInit {

  id = '';
  image_id = '47f44d3c-e8e0-5b0a-21b4-fb4da392e008';
  artist_title = 'William Morris';
  title = 'Acanthus';
  date_display = '1876 (produced 1877/1917)';
  provenance_text = `Martin Kamer, New York, by 1988 [Incoming receipt RX17105 dated 2/26/1988
    in curatorial file, Textiles Department]; sold to the Art Institure of Chicago, 1988.`;

  constructor(private config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.id = this.config.data?.id ?? '';
  }
}
