import randomWords from "random-words";
import {
  COMMON_WORDS,
 
} from "../constants/WordsMostCommon";
import {
  DEFAULT_DIFFICULTY,
  ENGLISH_MODE,

  DEFAULT_WORDS_COUNT,
} from "../constants/Constants";
import { randomIntFromRange } from "./randomUtils";
import { VOCAB_DICTIONARIES, DICTIONARY_SOURCE_CATALOG } from "../constants/DictionaryConstants";

const wordsGenerator = (wordsCount, difficulty, languageMode) => {
  if (languageMode === ENGLISH_MODE) {
    if (difficulty === DEFAULT_DIFFICULTY) {
        const EnglishWordList = [];
        for (let i = 0; i < DEFAULT_WORDS_COUNT; i++) {
          const rand = randomIntFromRange(0, 550);
          EnglishWordList.push(COMMON_WORDS[rand]);
        }
        return EnglishWordList;
    }
    const randomWordsGenerated = randomWords({ exactly: wordsCount, maxLength: 7 });
    const words = [];
    for (let i = 0; i < wordsCount; i++) {
        words.push({key: randomWordsGenerated[i], val: randomWordsGenerated[i]});
      }
    return words;
  }
  return ["something", "went", "wrong"];
};


const wordsCardVocabGenerator = (vocabSource, chapter) => {
  const wordsList = [];
  const chapterCatalog = DICTIONARY_SOURCE_CATALOG[vocabSource];
  const chapterStartIndex = chapterCatalog[chapter][0];
  const chapterEndIndex = chapterCatalog[chapter][1];
  for (let i = chapterStartIndex; i < chapterEndIndex + 1; i++) {
    wordsList.push(VOCAB_DICTIONARIES[vocabSource][i]);
  }
  return wordsList;
}

export { wordsGenerator,  wordsCardVocabGenerator};
