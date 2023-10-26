import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';

import { EntryError, EntryValue } from '../entry.model';
import * as EntryActions from './entry.actions';

export interface State {
  error: EntryError;
  value: EntryValue;
  isLoading: boolean;
}

const initialState: State = { error: null, value: null, isLoading: null };

export const reducer = createReducer(
  initialState,
  on(
    routerNavigatedAction,
    (state, action): State => ({
      ...state,
      isLoading: action.payload.routerState.root.firstChild ? true : false,
    })
  ),
  on(
    EntryActions.setError,
    (state, action): State => ({
      ...state,
      error: action.error.error,
      value: null,
      isLoading: false,
    })
  ),
  on(
    EntryActions.setValue,
    (state, action): State => ({
      ...state,
      error: null,
      value: {
        audio: action.value[0].phonetics.filter(
          (phonetic) => !!phonetic.audio
        )[0]?.audio,
        meanings: action.value[0].meanings,
        phonetic: action.value[0].phonetic,
        sourceUrl: action.value[0].sourceUrls[0],
        word: action.value[0].word,
      },
      isLoading: false,
    })
  )
);
