import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matching letters', () => {
    const lettersMatchCount = getLetterMatchCount('bones', secretWord);
    expect(lettersMatchCount).toBe(0);
  });
  test('returns correct count when there are 3 matching letters', () => {
    const lettersMatchCount = getLetterMatchCount('train', secretWord);
    expect(lettersMatchCount).toBe(3);
  });
  test('returns correct count when there are duplicate letters', () => {
    const lettersMatchCount = getLetterMatchCount('parka', secretWord);
    expect(lettersMatchCount).toBe(3);
  })
})
