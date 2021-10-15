import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'jurisin-details-dynamic-dialog-shell',
  template: `
    <h1>{{id}}</h1>
    <jurisin-details
      [image]="image"
      [artist]="artist"
      [title]="title"
      [date]="date"
      [placeOfOrigin]="placeOfOrigin"
      [department_title]="department_title"
    ></jurisin-details>
  `,
})
export class DetailsDynamicDialogShellComponent implements OnInit {

  id = '';
  image = 'https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg';
  artist = 'Alma Thomas';
  title = 'Starry Night and the Astronauts';
  date = '1972';
  placeOfOrigin = 'United States';
  department_title = 'Contemporary Art';

  constructor(private config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.id = this.config.data?.id ?? '';
  }
}
