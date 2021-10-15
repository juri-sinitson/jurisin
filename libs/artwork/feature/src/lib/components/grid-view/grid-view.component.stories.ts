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
    data:  'test',
}
