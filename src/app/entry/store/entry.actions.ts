import { createAction, props } from '@ngrx/store';

import { ApiResponseEntry, ApiResponseError } from '../entry.model';

export const fetch = createAction(`[Entry] Fetch`, props<{ word: string }>());

export const setEntry = createAction(
  `[Entry] Set Entry`,
  props<{ entry: ApiResponseEntry }>()
);

export const setError = createAction(
  `[Entry] Set Error`,
  props<{ error: ApiResponseError }>()
);
