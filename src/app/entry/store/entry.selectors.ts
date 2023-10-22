import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromEntry from './entry.reducer';

const selectState = createFeatureSelector<fromEntry.State>(`entry`);

export const selectError = createSelector(selectState, (state) => state.error);

export const selectValue = createSelector(selectState, (state) => state.value);
