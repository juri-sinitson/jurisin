// Angular
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Storybook
import { moduleMetadata, Story, Meta } from '@storybook/angular';

// PrimeNG
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

// Own
import { GridViewComponent } from './grid-view.component';
import { DetailsModule } from '../details/details.module';

export default {
  title: 'GridViewComponent',
  component: GridViewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // Angular
        CommonModule,
        BrowserAnimationsModule,

        // PrimeNG
        DataViewModule,
        CardModule,
        InputTextModule,
        DynamicDialogModule,

        // Own
        DetailsModule,
      ],
    })
  ],
} as Meta<GridViewComponent>;

const template: Story<GridViewComponent> = (args: GridViewComponent) => ({
  component: GridViewComponent,
  props: args,
});

export const primary = template.bind({});
primary.args = {
    artworks:  [
      {
        id: '11312',
        image_id: '132b782d-54e6-70e1-18f9-211468c09099',
        artist_title: 'Camille Pissarro',
        title: 'Woman Mending',
        date_display: '1895',
      },
      {
        id: '9614',
        image_id: '0330a6dd-774e-eff1-0073-2be5f85b81d0',
        artist_title: 'Morris Kantor',
        title: 'Haunted House',
        date_display: '1930',
      },
      {
        id: '16571',
        image_id: '0f1cc0e0-e42e-be16-3f71-2022da38cb93',
        artist_title: 'Claude Monet',
        title: '"Arrival of the Normandy Train, Gare Saint-Lazare',
        date_display: '1877',
      },
      {
        id: '24306',
        image_id: '702580d8-451e-0b0c-bcc1-bac62e5f6631',
        artist_title: 'Georgia O\'Keeffe',
        title: 'Blue and Green Music',
        date_display: '1919/21',
      },
      {
        id: '11312',
        image_id: 'd388928f-3222-b48c-1cbb-7afa917de928',
        artist_title: 'Doris Lee',
        title: 'Thanksgiving',
        date_display: 'c. 1935',
      }
   ],
}
