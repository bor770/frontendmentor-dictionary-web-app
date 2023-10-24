import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, filter, map, of, switchMap } from 'rxjs';

import { ApiResponseError, ApiResponseValue } from '../entry.model';
import * as EntryActions from './entry.actions';

const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

@Injectable()
export class EntryEffects {
  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map((action) => action.payload.routerState.root.firstChild),
      filter((child) => !!child),
      switchMap((child) =>
        this.http.get<ApiResponseValue>(`${API_URL}${child.params.word}`).pipe(
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
