// Angular
import { CommonModule } from '@angular/common';

// Storybook
import { moduleMetadata, Story, Meta } from '@storybook/angular';

// PrimeNG
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

// Own
import { GridViewComponent } from './grid-view.component';

export default {
  title: 'GridViewComponent',
  component: GridViewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // Angular
        CommonModule,

        // PrimeNG
        DataViewModule,
        CardModule,
        InputTextModule,
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
