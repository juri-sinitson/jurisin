import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DetailsComponent } from './details.component';

export default {
  title: 'DetailsComponent',
  component: DetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DetailsComponent>;

const template: Story<DetailsComponent> = (args: DetailsComponent) => ({
  component: DetailsComponent,
  props: args,
});


export const primary = template.bind({});
primary.args = {
    image:  '',
    artist:  '',
    title:  '',
    date:  '',
    placeOfOrigin:  '',
    department_title:  '',
}
