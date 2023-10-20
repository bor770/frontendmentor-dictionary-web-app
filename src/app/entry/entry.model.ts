export type EntryError = { message: string; resolution: string; title: string };

export type ApiResponseError = { error: EntryError };

export type EntryValue = {
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

export type ApiResponseValue = {
  meanings: {
    antonyms: string[];
    definitions: { definition: string; example: string }[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetic: string;
  phonetics: { audio: string }[];
  sourceUrls: string[];
  word: string;
}[];
