// Angular
import { Component, Input } from '@angular/core';

// PrimeNG
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsDynamicDialogShellComponent } from '../details/details-dynamic-dialog-shell.component';

// Own
import { Artwork } from '@jurisin/artwork/api';
import { EntityBase } from '@jurisin/shared/util';

@Component({
  selector: 'jurisin-grid-view',
  templateUrl: './grid-view.component.html',
  providers: [DialogService],
})
export class GridViewComponent {
  @Input() artworks: Partial<Artwork> & EntityBase [] = [];
  @Input() error = '';
  @Input() loading = false;

  constructor(private dialogService: DialogService) {}

  show(id: string | number, title: string) {
    this.dialogService.open(DetailsDynamicDialogShellComponent, {
      data: { id, },
      header: title,
      width: '70%'
    });
  }

  getValue(event: Event): string {
    const { target } = event;
    return (target as HTMLDataElement)?.value ?? '';
  }

}
