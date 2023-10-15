import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ApiResponse } from '../entry.model';
import * as EntryActions from './entry.actions';

const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

@Injectable()
export class EntryEffects {
  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(EntryActions.fetch),
      switchMap((action) =>
        this.http.get<ApiResponse>(`${apiUrl}${action.word}`).pipe(
          map((response) => EntryActions.set({ entry: response })),
          catchError(() => of())
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
