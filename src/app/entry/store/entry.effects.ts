import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ApiResponseError, ApiResponseValue } from '../entry.model';
import * as EntryActions from './entry.actions';

const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

@Injectable()
export class EntryEffects {
  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(EntryActions.fetch),
      switchMap((action) =>
        this.http.get<ApiResponseValue>(`${API_URL}${action.word}`).pipe(
          map((response) => EntryActions.setValue({ value: response })),
          catchError((error: ApiResponseError) =>
            of(EntryActions.setError({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
