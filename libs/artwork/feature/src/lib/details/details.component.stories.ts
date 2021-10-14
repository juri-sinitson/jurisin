// Storybook
import { moduleMetadata, Story, Meta } from '@storybook/angular';

// PrimeNG
import { CardModule } from 'primeng/card';

// Own
import { DetailsComponent } from './details.component';

export default {
  title: 'DetailsComponent',
  component: DetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CardModule
      ],
    })
  ],
} as Meta<DetailsComponent>;

const template: Story<DetailsComponent> = (args: DetailsComponent) => ({
  component: DetailsComponent,
  props: args,
});


export const primary = template.bind({});
primary.args = {
    image:  'https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg',
    artist:  'Alma Thomas',
    title:  'Starry Night and the Astronauts',
    date:  '1972',
    placeOfOrigin:  'United States',
    department_title:  'Contemporary Art',
}
