import { Component, OnInit } from '@angular/core';

import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { Artwork, ArtworkService } from '@jurisin/artwork/api';

@Component({
  selector: 'jurisin-details-dynamic-dialog-shell',
  template: `
    <jurisin-details
      [image_id]="image_id"
      [artist_title]="artist_title"
      [title]="title"
      [date_display]="date_display"
      [provenance_text]="provenance_text"
      [error]="error"
      [loading]="loading"
    ></jurisin-details>
  `,
})
export class DetailsDynamicDialogShellComponent implements OnInit {

  error = '';
  loading = true;

  id = '';
  image_id = '';
  artist_title = '';
  title = '';
  date_display = '';
  provenance_text = '';

  constructor(
    private config: DynamicDialogConfig,
    private artworkService: ArtworkService,
  ) {
  }

  ngOnInit() {
    this.id = this.config.data?.id ?? '';
    this.loading = true;
    this.artworkService.getByKey(this.id).subscribe({
      next: (artwork: Artwork): void => {
        this.error = '';
        this.loading = false;
        this.image_id = artwork.image_id;
        this.artist_title = artwork.artist_title;
        this.title = artwork.title;
        this.date_display = artwork.date_display;
        this.provenance_text = artwork.provenance_text;
      },}
    );

    this.artworkService.getError().subscribe({
      next: (error: string): void => {
        this.error = error;
      },
      error: (error: Error): void => {
        this.error = error.message;
      }
    });
  }
}
