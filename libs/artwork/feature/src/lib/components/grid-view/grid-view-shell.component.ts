// Angular
import { Component, OnInit } from '@angular/core';

// Own
import { Artwork, ArtworkService } from '@jurisin/artwork/api';

@Component({
  selector: 'jurisin-grid-view-shell',
  template: `
    <jurisin-grid-view
      [artworks]="artworks"
      [error]="error"
      [loading]="loading"
    >
    </jurisin-grid-view>
  `,
})
export class GridViewShellComponent implements OnInit {

  artworks: Artwork[] = [];
  error = '';
  loading = true;

  constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.loading = true;
    this.artworkService.getAll().subscribe({
      next: (artworks: Artwork[]): void => {
        this.artworks = artworks;
        this.error = '';
        this.loading = false;
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
