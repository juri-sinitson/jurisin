import { EntityBase } from '@jurisin/shared/util';

export interface Artwork extends EntityBase {
  image_id: string;
  artist_title: string;
  title: string;
  date_display: string;
  provenance_text: string;
}
