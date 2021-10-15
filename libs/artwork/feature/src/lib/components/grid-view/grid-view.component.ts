// Angular
import { Component, Input } from '@angular/core';

// PrimeNG
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsDynamicDialogShellComponent } from '../details/details-dynamic-dialog-shell.component';

// Own
import { Artwork } from '@jurisin/artwork/api';

@Component({
  selector: 'jurisin-grid-view',
  templateUrl: './grid-view.component.html',
  providers: [DialogService],
})
export class GridViewComponent {
  @Input() artworks: Partial<Artwork>[] = [];

  constructor(private dialogService: DialogService) {}

  show(id: string | number) {
    this.dialogService.open(DetailsDynamicDialogShellComponent, {
      data: { id, },
      header: 'Artwork Details',
      width: '70%'
    });
  }

}
