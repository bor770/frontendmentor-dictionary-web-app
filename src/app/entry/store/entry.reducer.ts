import { createReducer, on } from '@ngrx/store';

import { EntryError, EntryValue } from '../entry.model';
import * as EntryActions from './entry.actions';

export interface State {
  error: EntryError;
  value: EntryValue;
}

const initialState: State = { error: null, value: null };

export const reducer = createReducer(
  initialState,
  on(
    EntryActions.setError,
    (state, action): State => ({
      ...state,
      value: null,
      error: action.error.error,
    })
  ),
  on(
    EntryActions.setValue,
    (state, action): State => ({
      ...state,
      value: {
        audio: action.value[0].phonetics.filter(
          (phonetic) => !!phonetic.audio
        )[0]?.audio,
        meanings: action.value[0].meanings,
        phonetic: action.value[0].phonetic,
        sourceUrl: action.value[0].sourceUrls[0],
        word: action.value[0].word,
      },
      error: null,
    })
  )
);
