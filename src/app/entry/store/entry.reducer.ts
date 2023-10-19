import { createReducer, on } from '@ngrx/store';

import * as EntryActions from './entry.actions';

export interface State {
  value: {
    audio: string;
    meanings: {
      antonyms: string[];
      definitions: { definition: string; example: string }[];
      partOfSpeech: string;
      synonyms: string[];
    }[];
    phonetic: string;
    sourceUrl: string;
    word: string;
  };
  error: { message: string; resolution: string; title: string };
}

const initialState: State = { value: null, error: null };

export const reducer = createReducer(
  initialState,
  on(
    EntryActions.setEntry,
    (state, action): State => ({
      ...state,
      value: {
        audio: action.entry[0].phonetics.filter(
          (phonetic) => !!phonetic.audio
        )[0].audio,
        meanings: action.entry[0].meanings,
        phonetic: action.entry[0].phonetic,
        sourceUrl: action.entry[0].sourceUrls[0],
        word: action.entry[0].word,
      },
      error: null,
    })
  ),
  on(
    EntryActions.setError,
    (state, action): State => ({
      ...state,
      value: null,
      error: action.error.error,
    })
  )
);
