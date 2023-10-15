import { createFeatureSelector } from '@ngrx/store';

import * as fromFont from './font.reducer';

export const selectState = createFeatureSelector<fromFont.State>(`font`);
