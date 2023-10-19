export type ApiResponseEntry = {
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

export type ApiResponseError = {
  error: { message: string; resolution: string; title: string };
};
