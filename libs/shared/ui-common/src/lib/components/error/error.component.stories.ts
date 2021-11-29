import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MessageModule } from 'primeng/message';
import { ErrorComponent } from './error.component';

export default {
  title: 'Shared/UI-Common/Error Message',
  component: ErrorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // Angular
        CommonModule,

        // Own
        MessageModule,
      ],
    })
  ],
} as Meta<ErrorComponent>;

const template: Story<ErrorComponent> = (args: ErrorComponent) => ({
  props: args,
});


export const primary = template.bind({});
primary.args = {
    message:  'This is an error!',
}
