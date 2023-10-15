import { ActionReducerMap } from '@ngrx/store';

import * as fromEntry from '../entry/store/entry.reducer';
import * as fromFont from '../shared/font/store/font.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromScheme from '../shared/scheme/store/scheme.reducer';

interface RootState {
  entry: fromEntry.State;
  font: fromFont.State;
  layout: fromLayout.State;
  scheme: fromScheme.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  entry: fromEntry.reducer,
  font: fromFont.reducer,
  layout: fromLayout.reducer,
  scheme: fromScheme.reducer,
};
