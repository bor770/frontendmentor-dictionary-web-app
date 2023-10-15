import { createReducer, on } from '@ngrx/store';

import { Scheme } from '../scheme.model';
import * as SchemeActions from './scheme.actions';

export type State = Scheme;

const initialState: State = matchMedia(`(prefers-color-scheme: dark)`).matches
  ? `dark`
  : `light`;

export const reducer = createReducer(
  initialState,
  on(
    SchemeActions.toggle,
    (state): State => (state === `dark` ? `light` : `dark`)
  )
);
