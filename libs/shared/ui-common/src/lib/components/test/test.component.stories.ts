import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestComponent } from './test.component';

export default {
  title: 'TestComponent',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TestComponent>;

const template: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  props: args,
});


export const primary = template.bind({});
primary.args = {
    input:  '',
}
