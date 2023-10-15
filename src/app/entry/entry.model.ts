export type ApiResponse = {
  meanings: {
    antonyms: string[];
    definitions: { definition: string }[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetic: string;
  phonetics: { audio: string }[];
  sourceUrls: string[];
  word: string;
};
