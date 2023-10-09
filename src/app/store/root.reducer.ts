import { ActionReducerMap } from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';

interface RootState {
  layout: fromLayout.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  layout: fromLayout.reducer,
};
