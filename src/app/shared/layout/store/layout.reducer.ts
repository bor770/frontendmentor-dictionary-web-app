import { createReducer, on } from '@ngrx/store';

import { Width } from '../layout.model';
import * as LayoutActions from './layout.actions';

export type State = Width;

const initialState: State = null;

export const reducer = createReducer(
  initialState,
  on(LayoutActions.setWidth, (state, action): State => action.width)
);
