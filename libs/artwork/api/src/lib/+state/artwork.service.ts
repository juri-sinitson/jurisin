import {
  EntityAction,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

import { Observable, of, Subject, zip } from 'rxjs';
import { distinct, filter, switchMap, tap } from 'rxjs/operators';

import { Artwork } from './artwork';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService extends EntityCollectionServiceBase<Artwork> {
  private id$ = new Subject<string | number>();

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Artwork', serviceElementsFactory);

    // Fetching the data if not yet there
    this.id$
      .pipe(
        // Preventing multiple requests e.g. when multiple components
        // are requesting the same data
        distinct(),
        switchMap(
          (id: string | number): Observable<Artwork | undefined> =>
            this.filteredEntities$.pipe(
              switchMap(
                (
                  entityCollection: Artwork[]
                ): Observable<Artwork | undefined> => {
                  const thatEntity: Artwork | undefined = entityCollection.find(
                    (entity: Artwork) => `${entity.id}` === `${id}`
                  );


                  return of(thatEntity).pipe(
                    // If the entity is empty
                    filter((v: Artwork | undefined): boolean => !v),
                    // then requesting it otherwise doing just nothing
                    tap(() => super.getByKey(id))
                  );
                }
              )
            )
        )
      )
      .subscribe();
  }

  getByKey(id: string | number): Observable<Artwork> {
    this.id$.next(id);

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
