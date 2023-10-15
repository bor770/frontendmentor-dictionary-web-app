import { createAction, props } from '@ngrx/store';

import { ApiResponse } from '../entry.model';

export const fetch = createAction(`[Entry] Fetch`, props<{ word: string }>());

export const set = createAction(`[Entry] Set`, props<{ entry: ApiResponse }>());
