// Angular
import { Component, OnInit } from '@angular/core';

// Own
import { Artwork, ArtworkService } from '@jurisin/artwork/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'jurisin-grid-view-shell',
  template: `
    <jurisin-grid-view
      [artworks]="artworks$ | async"
      [error]="error$ | async "
      [loading]="loading$ | async"
    >
    </jurisin-grid-view>
  `,
})
export class GridViewShellComponent implements OnInit {

  artworks$!: Observable<Artwork[]>;
  error$!: Observable<string>;
  loading$!: Observable<boolean>;

  constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.artworks$ = this.artworkService.getAll();
    this.error$ = this.artworkService.getError();
    this.loading$ = this.artworkService.getLoading();
  }
}
