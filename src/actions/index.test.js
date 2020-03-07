import {correctGuess, actionTypes} from './';

describe('correctGuess', () => {
  test('returns an action with type "CORRECT_GUESS"', ()=> {
    const action = correctGuess();
    console.log(action);
    expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
  })
})
