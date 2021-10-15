import { CommonModule } from '@angular/common';

import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LoadingComponent } from './loading.component';

export default {
  title: 'LoadingComponent',
  component: LoadingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,

        ProgressSpinnerModule,
      ],
    })
  ],
} as Meta<LoadingComponent>;

const template: Story<LoadingComponent> = (args: LoadingComponent) => ({
  component: LoadingComponent,
  props: args,
});


export const primary = template.bind({});
primary.args = {
}
