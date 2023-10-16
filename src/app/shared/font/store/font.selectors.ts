import { createFeatureSelector, createSelector } from '@ngrx/store';

import { fontCssName } from '../font.model';
import * as fromFont from './font.reducer';

export const selectState = createFeatureSelector<fromFont.State>(`font`);

export const selectFontCssName = createSelector(selectState, fontCssName);
// (state) => `var(--font-${state.toLowerCase().split(` `).join(`-`)})`
