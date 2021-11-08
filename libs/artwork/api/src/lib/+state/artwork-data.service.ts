import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Artwork } from './artwork';

@Injectable()
export class ArtworkDataService extends DefaultDataService<Artwork> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Artwork', http, httpUrlGenerator);
  }

  getAll(): Observable<Artwork[]> {
    const url = `${this.httpUrlGenerator.collectionResource('Artwork', 'api')}`;
    return this.http.get(url).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((data: any): Artwork[] => data.data)
    );
  }
}
