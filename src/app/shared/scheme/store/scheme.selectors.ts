import { createFeatureSelector } from '@ngrx/store';

import * as fromScheme from './scheme.reducer';

export const selectState = createFeatureSelector<fromScheme.State>(`scheme`);
