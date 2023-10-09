import { createFeatureSelector } from '@ngrx/store';

import * as fromLayout from './layout.reducer';

export const selectState = createFeatureSelector<fromLayout.State>(`layout`);
