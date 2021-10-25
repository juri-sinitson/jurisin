import {
  EntityAction,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

import { Observable, of, Subject, zip } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { Artwork } from './artwork';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService extends EntityCollectionServiceBase<Artwork> {
  private id$ = new Subject<string | number>();

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Artwork', serviceElementsFactory);
  }

  getByKey(id: string | number): Observable<Artwork> {

    return this.filteredEntities$.pipe(
      switchMap((entityCollection: Artwork[]): Observable<Artwork> => {
        const thatEntity: Artwork | undefined = entityCollection.find(
          (entity: Artwork) => `${entity.id}` === `${id}`
        );
        return thatEntity ? of(thatEntity) : of();
      })
    );
  }

  getAll(): Observable<Artwork[]> {

    return zip(this.loaded$, this.loading$).pipe(
      // If not loaded and not loading
      map( ([loaded, loading]):boolean => loaded === false && loading === false ),
      switchMap((mustRequest: boolean): Observable<Artwork[]> => {
        if(mustRequest) {
          return super.load();
        }
        return this.entities$;
      })
    );
  }

  getError(): Observable<string> {
    return this.errors$.pipe(
      map( (action: EntityAction): string =>
        action.payload.data?.error?.error?.message ?? 'Unknown request error!'
      )
    );
  }
}
