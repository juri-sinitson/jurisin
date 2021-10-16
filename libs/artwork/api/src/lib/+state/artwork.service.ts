import {
  EntityAction,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

import { Observable, of, Subject, zip } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

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

    zip(this.loaded$, this.loading$).pipe(
      // If not loaded and not loading
      filter( ([loaded, loading] ):boolean => loaded === false && loading === false ),
      // then just load
      tap((): void => { super.load() } ),
    ).subscribe();

    return this.entities$;
  }

  getErrors(): Observable<EntityAction> {
    return this.errors$;
  }
}
