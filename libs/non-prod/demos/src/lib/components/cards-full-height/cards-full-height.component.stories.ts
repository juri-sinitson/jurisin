import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardsFullHeightComponent } from './cards-full-height.component';

import { CardsFullHeightModule } from './cards-full-height.module';

export default {
  title: 'Demos/Card Full Height',
  component: CardsFullHeightComponent,
  decorators: [
    moduleMetadata({
      imports: [CardsFullHeightModule],
    }),
  ],
} as Meta<CardsFullHeightComponent>;

const template: Story<CardsFullHeightComponent> = (
  args: CardsFullHeightComponent
) => ({
  props: args,
});

export const primary = template.bind({});
primary.args = {};
