import { createAction, props } from '@ngrx/store';

import { ApiResponseError, ApiResponseValue } from '../entry.model';

export const setError = createAction(
  `[Entry] Set Error`,
  props<{ error: ApiResponseError }>()
);

export const setValue = createAction(
  `[Entry] Set Value`,
  props<{ value: ApiResponseValue }>()
);
