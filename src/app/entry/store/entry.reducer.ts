import { createReducer, on } from '@ngrx/store';

import * as EntryActions from './entry.actions';

export interface State {
  audio: string;
  meanings: {
    antonyms: string[];
    definitions: string[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetic: string;
  sourceUrl: string;
  word: string;
}

const initialState: State = null;

export const reducer = createReducer(
  initialState,
  on(
    EntryActions.set,
    (state, action): State => ({
      ...state,
      audio: action.entry.phonetics.filter((phonetic) => !!phonetic.audio)[0]
        .audio,
      meanings: action.entry.meanings.map((meaning) => ({
        ...meaning,
        definitions: meaning.definitions.map(
          (definition) => definition.definition
        ),
      })),
      phonetic: action.entry.phonetic,
      sourceUrl: action.entry.sourceUrls[0],
      word: action.entry.word,
    })
  )
);
