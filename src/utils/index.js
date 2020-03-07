export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedLettersSet = new Set(guessedWord.split(''));
  const secretLettersSet = new Set(secretWord.split(''));
  return [...guessedLettersSet]
    .filter(letter => secretLettersSet.has(letter))
    .length;
};

