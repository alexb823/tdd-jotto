export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedLettersSet = new Set(guessedWord.split(''));
  const secretLettersSet = new Set(secretWord.split(''));
  return [...guessedLettersSet].filter(letter => secretLettersSet.has(letter)).length;
}


// export const getLetterMatchCount = (guessedWord, secretWord) => {
//   let count = 0;
//   for (let char of guessedWord) {
//     if (secretWord.includes(char)) {
//       ++count;
//       const regex = new RegExp(char, 'gi')
//       secretWord = secretWord.replace(regex, '');
//     }
//   }
//   return count;
// }
