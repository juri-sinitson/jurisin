// Angular
import { CommonModule } from '@angular/common';

// Storybook
import { moduleMetadata, Story, Meta } from '@storybook/angular';

// PrimeNG
import { CardModule } from 'primeng/card';

// Own
import { DetailsComponent } from './details.component';
import { ErrorModule, LoadingModule } from '@jurisin/shared/ui-common';


export default {
  title: 'Artwork/Details',
  component: DetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // Angular
        CommonModule,

        // PrimeNG
        CardModule,

        // Own
        ErrorModule,
        LoadingModule,
      ],
    })
  ],
} as Meta<DetailsComponent>;

const template: Story<DetailsComponent> = (args: DetailsComponent) => ({
  props: args,
});


export const primary = template.bind({});
primary.args = {
  loading: false,
  error: '',
  image_id: '132b782d-54e6-70e1-18f9-211468c09099',
  artist_title: 'Camille Pissarro',
  title: 'Woman Mending',
  date_display: '1895',
  provenance_text: `
    The artist (d. 1903); by descent to his son, Ludovic-Rodolph (Rodo) Pissarro, Paris,
    1904 [this and the two following per Pissarro and Snollaerts, 2005]; sold to Sam Saltz,
    New York, by December 1950; sold to Mrs. Mary Block (née Lasker), Chicago, December 1950;
    given to the Art Institute of Chicago, beginning in 1959 [in undivided fractional interests,
    receiving final fractional interest for one hundred percent ownership in 1961].`,
};

export const error = template.bind({});
error.args = {
  loading: false,
  error: 'Some error happened!',
  image_id: '132b782d-54e6-70e1-18f9-211468c09099',
  artist_title: 'Camille Pissarro',
  title: 'Woman Mending',
  date_display: '1895',
  provenance_text: `
    The artist (d. 1903); by descent to his son, Ludovic-Rodolph (Rodo) Pissarro, Paris,
    1904 [this and the two following per Pissarro and Snollaerts, 2005]; sold to Sam Saltz,
    New York, by December 1950; sold to Mrs. Mary Block (née Lasker), Chicago, December 1950;
    given to the Art Institute of Chicago, beginning in 1959 [in undivided fractional interests,
    receiving final fractional interest for one hundred percent ownership in 1961].`,
};

export const loading = template.bind({});
loading.args = {
  loading: true,
  error: '',
  image_id: '132b782d-54e6-70e1-18f9-211468c09099',
  artist_title: 'Camille Pissarro',
  title: 'Woman Mending',
  date_display: '1895',
  provenance_text: `
    The artist (d. 1903); by descent to his son, Ludovic-Rodolph (Rodo) Pissarro, Paris,
    1904 [this and the two following per Pissarro and Snollaerts, 2005]; sold to Sam Saltz,
    New York, by December 1950; sold to Mrs. Mary Block (née Lasker), Chicago, December 1950;
    given to the Art Institute of Chicago, beginning in 1959 [in undivided fractional interests,
    receiving final fractional interest for one hundred percent ownership in 1961].`,
};
