import { createFeatureSelector } from '@ngrx/store';

import * as fromEntry from './entry.reducer';

export const selectState = createFeatureSelector<fromEntry.State>(`entry`);
