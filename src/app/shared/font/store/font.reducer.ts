import { createReducer, on } from '@ngrx/store';

import { Font } from '../font.model';
import * as FontActions from './font.actions';

export type State = Font;

const initialState: State = `Sans Serif`;

export const reducer = createReducer(
  <State>initialState,
  on(FontActions.set, (_state, action): State => action.font)
);
