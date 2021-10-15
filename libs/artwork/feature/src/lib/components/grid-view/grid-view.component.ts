// Angular
import { Component, Input } from '@angular/core';

// PrimeNG
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsDynamicDialogShellComponent } from '../details/details-dynamic-dialog-shell.component';

@Component({
  selector: 'jurisin-grid-view',
  templateUrl: './grid-view.component.html',
  providers: [DialogService],
})
export class GridViewComponent {
  @Input() data = '';

  cars = [
    {
      id: 'car id 1',
      year: '2021',
    },
    {
      id: 'car id 2',
      year: '2020',
    },
    {
      id: 'car id 3',
      year: '2020',
    },
    {
      id: 'car id 4',
      year: '2021',
    },
    {
      id: 'car id 5',
      year: '2021',
    },
    {
      id: 'car id 6',
      year: '2021',
    }
  ];

  constructor(private dialogService: DialogService) {}

  show() {
    const ref = this.dialogService.open(DetailsDynamicDialogShellComponent, {
      data: {
        id: 'testme',
      },
      header: 'Artwork Details',
      width: '70%'
    });
  }

}
